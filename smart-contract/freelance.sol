// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ReputationToken.sol";

contract FreelancerMarket {
    address public owner;
    uint public jobIdCounter;
    uint public freelancerIdCounter;

    enum JobStatus { Open, InProgress, Completed, Canceled }

    struct Job {
        uint jobId;
        address client;
        address freelancer;
        string title;
        string description;
        string proof;
        uint budget;
        JobStatus status;
        bool verifiedByClient;
    }

    struct FreelancerProfile {
        uint freelancerId;
        address freelancerAddress;
        string name;
        string skills;
        uint totalJobsCompleted;
        uint totalEarned;
        uint reputation;
    }

    mapping(address => FreelancerProfile) public freelancers;
    mapping(uint => Job) public jobs;

    event JobPosted(uint indexed jobId, address indexed client, string title, uint budget);
    event JobAssigned(uint indexed jobId, address indexed freelancer);
    event JobCompleted(uint indexed jobId, string proof);
    event JobVerifiedByClient(uint indexed jobId);
    event FreelancerProfileCreated(address indexed freelancerAddress, string name, string skills);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyClient(uint jobId) {
        require(msg.sender == jobs[jobId].client, "Not the client");
        _;
    }

    modifier onlyFreelancer(uint jobId) {
        require(msg.sender == jobs[jobId].freelancer, "Not the freelancer");
        _;
    }

    modifier jobExists(uint jobId) {
        require(jobs[jobId].jobId == jobId, "Job does not exist");
        _;
    }

    constructor() {
        owner = msg.sender;
        reputationToken = new ReputationToken();
    }

    function createFreelancerProfile(string memory name, string memory skills) external {
        freelancerIdCounter++;
        freelancers[msg.sender] = FreelancerProfile({
            freelancerId: freelancerIdCounter,
            freelancerAddress: msg.sender,
            name: name,
            skills: skills,
            totalJobsCompleted: 0,
            totalEarned: 0
            reputation: 0
        });

        emit FreelancerProfileCreated(msg.sender, name, skills);
    }

    function postJob(string memory title, string memory description, uint budget) external payable {
        require(msg.value == budget, "Incorrect budget amount");

        jobIdCounter++;
        jobs[jobIdCounter] = Job({
            jobId: jobIdCounter,
            client: msg.sender,
            freelancer: address(0),
            title: title,
            description: description,
            proof: '',
            budget: budget,
            status: JobStatus.Open,
            verifiedByClient: false
        });

        emit JobPosted(jobIdCounter, msg.sender, title, budget);
    }

    function assignJob(uint jobId, address freelancer) external onlyClient(jobId) jobExists(jobId) {
        require(jobs[jobId].freelancer == address(0), "Job already assigned");

        jobs[jobId].freelancer = freelancer;
        jobs[jobId].status = JobStatus.InProgress;

        emit JobAssigned(jobId, msg.sender);
    }

    function completeJob(uint jobId, string memory proof) external onlyFreelancer(jobId) jobExists(jobId) {
        require(jobs[jobId].status == JobStatus.InProgress, "Job not in progress");

        jobs[jobId].status = JobStatus.Completed;
        jobs[jobId].proof = proof;

        emit JobCompleted(jobId, proof);
    }

    function verifyJob(uint jobId) external onlyClient(jobId) jobExists(jobId) {
        require(jobs[jobId].status == JobStatus.Completed, "Job not completed yet");
        require(!jobs[jobId].verifiedByClient, "Job already verified");

        // Transfer funds from client to freelancer
        payable(jobs[jobId].freelancer).transfer(jobs[jobId].budget);
        // Update freelancer profile
        freelancers[jobs[jobId].freelancer].totalJobsCompleted++;
        freelancers[jobs[jobId].freelancer].totalEarned += jobs[jobId].budget;
        freelancers[jobs[jobId].freelancer].reputation += 1;

        jobs[jobId].verifiedByClient = true;

        emit JobVerifiedByClient(jobId);
    }
}
