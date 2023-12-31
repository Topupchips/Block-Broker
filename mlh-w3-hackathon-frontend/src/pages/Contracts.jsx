import "./Contracts.css"
import {AvailableContract, InProgressContract, YourOpenContract, YourWorkingContract} from "../sections/ContractBlocks.jsx"

//Section Imports
import Header from '../sections/Header.jsx';
const userId = "34345675"; // has all types of component data
//const userId = "52856954";
const allContracts = [
    {
        jobId: 1,
        client: "12345675",
        freelancer: null,
        applicants: [],
        title: "Example Contract 1", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 2,
        client: "12345675",
        freelancer: null,
        applicants: [],
        title: "Example Contract 2", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 3,
        client: "34345675",
        freelancer: null,
        applicants: ["234324234", "24352345", "2452451"],
        title: "Example Contract 3", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 4,
        client: "34345675",
        freelancer: "123434145",
        applicants: [],
        title: "Example Contract 4", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "in progress",
        verifiedByClient: false
    },
    {
        jobId: 5,
        client: "52856954",
        freelancer: "34345675",
        applicants: [],
        title: "Example Contract 5", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "in progress",
        verifiedByClient: false
    },
    {
        jobId: 6,
        client: "52856954",
        freelancer: "34345675",
        applicants: [],
        title: "Example Contract 6", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "completed",
        verifiedByClient: false
    },
    {
        jobId: 7,
        client: "63556361",
        freelancer: "343683863",
        applicants: [],
        title: "Example Contract 7", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "approved",
        verifiedByClient: false
    },
    {
        jobId: 8,
        client: "52856954",
        freelancer: null,
        applicants: [],
        title: "Example Contract 8", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 9,
        client: "62345455",
        freelancer: null,
        applicants: [],
        title: "Example Contract 9", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 10,
        client: "62345455",
        freelancer: null,
        applicants: [],
        title: "Example Contract 10", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 11,
        client: "62345455",
        freelancer: "34345675",
        applicants: [],
        title: "Example Contract 11", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "in progress",
        verifiedByClient: false
    }
];

const availableContracts = []; // All contracts marked as open (not including your own)
const yourOpenContracts = [] // The user's own contracts that are open
const inProgressContracts = []; // User's Contracts that are currently being worked on by a freelancer
const contractsWorkedingOn = []; // Contracts the user are currently working on
const paidContracts = []; // Contracts the user has paid out
const completedContracts = []; // Contracts that the user has completed work on
const contractApplications = [] // Contracts you've applied for

function organizeContracts(contractsList){
    availableContracts.length = 0; // clears array
    inProgressContracts.length = 0; // clears array
    yourOpenContracts.length = 0; // clears array
    contractsWorkedingOn.length = 0; //clears array
    for (let contract of contractsList){
        if (contract.client == userId){
            if (contract.status == "open"){
                yourOpenContracts.push(contract);
            }
            if (contract.status == "in progress" || contract.status == "complete"){
                inProgressContracts.push(contract);
            }
            if (contract.status == "approved"){
                paidContracts.push(contract);
            }
        }
        else{
            if (contract.freelancer == userId){
                if (contract.status == "in progress" || contract.status == "complete"){
                    contractsWorkedingOn.push(contract);
                }
                if (contract.status == "approved"){
                    completedContracts.push(contract);
                }
            }
            else if (contract.status == "open"){
                if (contract.applicants.includes(userId)){
                    contractApplications.push(contract);
                }
                else{
                    availableContracts.push(contract);
                }
            }
            
        }
    }
}

function Contracts() {
    organizeContracts(allContracts);
    return (
      <>
        <Header/>
        <div className="ContractsWrapper">
            <div className="contractsTop">
                <h1 className="contractsHeader">Contracts</h1>
            </div>
            <ContractsBlock title="Your Open Contracts" classPrefix="YourOpenContracts" contractType={YourOpenContract} loadAmount={20} contractsList={yourOpenContracts}/>
            <ContractsBlock title="Contracts You Are Working On" classPrefix="YourWorkingContracts" contractType={YourWorkingContract} loadAmount={20} contractsList={contractsWorkedingOn}/>
            <ContractsBlock title="Your Contracts In Progress" classPrefix="InProgressContracts" contractType={InProgressContract} loadAmount={20} contractsList={inProgressContracts}/>
            <ContractsBlock title="Available Contracts" classPrefix="AvailableContracts" contractType={AvailableContract} loadAmount={20} contractsList={availableContracts}/>
        </div>
        
      </>
    );
}

function ContractsBlock(props) {

    if (props.contractsList.length == 0){
        return (<></>);
    }
    let numToRender = Math.min(props.loadAmount, props.contractsList.length)
    const componentsToRender = [];
    const ContractType = props.contractType;
    for (let i = 0; i < numToRender; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        componentsToRender.push(<ContractType classPrefix={props.classPrefix}contractInfo={props.contractsList[i]}/>);
    }
    return (
      <>
        <div className={props.classPrefix + "BlockTop"}>
            <h2 className={props.classPrefix + "BlockHeader"}>{props.title}</h2>
        </div>
        {componentsToRender}
      </>
    );
}


export default Contracts;