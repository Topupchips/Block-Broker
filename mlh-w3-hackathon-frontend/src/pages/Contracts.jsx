import "./Contracts.css"

//Section Imports
import Header from '../sections/Header.jsx';
const userId = "34345675";
const allContracts = [
    {
        jobId: 1,
        client: "12345675",
        freelancer: null,
        applied: [],
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
        applied: [],
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
        applied: [],
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
        freelancer: null,
        applied: [],
        title: "Example Contract 4", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "open",
        verifiedByClient: false
    },
    {
        jobId: 5,
        client: "52856954",
        freelancer: "34345675",
        applied: [],
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
        applied: [],
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
        applied: [],
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
        applied: [],
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
        applied: [],
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
        applied: [],
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
        applied: [],
        title: "Example Contract 11", 
        budget: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum.",
        proof: "something",
        status: "in progress",
        verifiedByClient: false
    }
];

const availableContracts = [];
const yourOpenContracts = []
const inProgressContracts = [];

function organizeContracts(contractsList){
    availableContracts.length = 0; // clears array
    inProgressContracts.length = 0; // clears array
    yourOpenContracts.length = 0; // clears array
    for (let contract of contractsList){
        if (contract.client == userId){
            if (contract.status == "open"){
                yourOpenContracts.push(contract);
            }
        }
        else{
            if (contract.status == "open"){
                availableContracts.push(contract);
            }
        }
        if (contract.freelancer == userId){
            if (contract.status == "in progress" || contract.status == "complete"){
                inProgressContracts.push(contract);
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
            <ContractsBlock title="Contracts In Progress" classPrefix="InProgressContracts" contractType={InProgressContract} loadAmount={20} contractsList={inProgressContracts}/>
            <ContractsBlock title="Available Contracts" classPrefix="AvailableContracts" contractType={AvailableContract} loadAmount={20} contractsList={availableContracts}/>
        </div>
        
      </>
    );
}

function ContractsBlock(props) {

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

function YourOpenContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="availableContractDescription">{props.contractInfo.description}</p>
                <ApplyButton jobId={props.contractInfo.jobId}/>
            </div>
        </>
    );
}

function InProgressContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className={props.classPrefix + "Description"}>{props.contractInfo.description}</p>
                <ApplyButton jobId={props.contractInfo.jobId}/>
            </div>
        </>
    );
}

function AvailableContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="availableContractDescription">{props.contractInfo.description}</p>
                <ApplyButton jobId={props.contractInfo.jobId}/>
            </div>
        </>
    );
}

function ApplyButton(props){
    return (
        <>
            <button>Apply</button>
        </>
    );
}


export default Contracts;