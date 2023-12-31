import "./ContractBlocks.css"

export function YourOpenContract(props){
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

export function InProgressContract(props){
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

export function AvailableContract(props){
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

export function ApplyButton(props){
    return (
        <>
            <button>Apply</button>
        </>
    );
}