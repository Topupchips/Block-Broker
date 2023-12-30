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
const inProgressContracts = [];

function organizeContracts(contractsList){
    availableContracts.length = 0; // clears array
    inProgressContracts.length = 0; // clears array
    for (let contract of contractsList){
        if (contract.status == "open"){
            availableContracts.push(contract);
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
            <div className="InProgressContractsBlockTop">
                <h2 className="InProgressContractsHeader">Contracts In Progress</h2>
            </div>
            <InProgressContractsBlock loadAmount={20} contractsList={inProgressContracts}/>
            <div className="AvailableContractsBlockTop">
                <h2 className="availableContractsHeader">Available Contracts</h2>
            </div>
            <AvailableContractsBlock loadAmount={20} contractsList={availableContracts}/>
        </div>
        
      </>
    );
}

function InProgressContractsBlock(props) {

    let numToRender = Math.min(props.loadAmount, props.contractsList.length)
    const componentsToRender = [];
    for (let i = 0; i < numToRender; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        componentsToRender.push(<InProgressContract contractInfo={props.contractsList[i]}/>);
    }
    return (
      <>
        {componentsToRender}
        
      </>
    );
}

function InProgressContract(props){
    return (
        <>
            <div className="AvailableContractContainer">
                <div className="availableContractTopRow">
                    <h4 className="availableContractTitle">{props.contractInfo.title}</h4>
                    <p className="availableContractPrice">{props.contractInfo.price}</p>
                </div>
                <p className="availableContractDescription">{props.contractInfo.description}</p>
                <ApplyButton jobId={props.contractInfo.jobId}/>
            </div>
        </>
    );
}

function AvailableContractsBlock(props) {

    let numToRender = Math.min(props.loadAmount, props.contractsList.length)
    const componentsToRender = [];
    for (let i = 0; i < numToRender; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        componentsToRender .push(<AvailableContract contractInfo={props.contractsList[i]}/>);
    }
    return (
      <>
        {componentsToRender}
        
      </>
    );
}

function AvailableContract(props){
    return (
        <>
            <div className="AvailableContractContainer">
                <div className="availableContractTopRow">
                    <h4 className="availableContractTitle">{props.contractInfo.title}</h4>
                    <p className="availableContractPrice">{props.contractInfo.price}</p>
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