import "./Contracts.css"

//Section Imports
import Header from '../sections/Header.jsx';
const availableContracts = [
    {
        title: "Example Contract", 
        price: "$1,000",
        description: "Vivamus rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 2", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 3", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 4", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 5", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 6", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 7", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 8", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 9", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 10", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    },
    {
        title: "Example Contract 11", 
        price: "$3,000",
        description: "Lorem rutrum mollis suscipit. Nulla ut nisl tellus. Ut sagittis purus risus, malesuada rutrum mi gravida eu. Morbi imperdiet mi justo, at tincidunt neque hendrerit vel. Quisque nec nibh ut nunc mattis mattis. In laoreet sapien ac laoreet bibendum."
    }
];
function Contracts() {
    
    return (
      <>
        <Header/>
        <div className="ContractsWrapper">
            <div className="contractsTop">
                <h1 className="contractsHeader">Contracts</h1>
            </div>
            <AvailableContractsBlock loadAmount={10}/>
        </div>
        
      </>
    );
}



function AvailableContractsBlock(props) {

    let numToRender = Math.min(props.loadAmount, availableContracts.length)
    const componentsToRender = [];
    for (let i = 0; i < numToRender; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        componentsToRender .push(<AvailableContract contractInfo={availableContracts[i]}/>);
    }
    return (
      <>
        <div className="AvailableContractsBlockTop">
            <h2 className="contractsHeader">Available Contracts</h2>
        </div>
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
            </div>
        </>
    );
}

export default Contracts;