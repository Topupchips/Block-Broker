import "./ContractBlocks.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function YourOpenContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="availableContractDescription">{props.contractInfo.description}</p>
                <ViewApplicantsButton job={props.contractInfo}/>
            </div>
        </>
    );
}

export function YourWorkingContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className={props.classPrefix + "Description"}>{props.contractInfo.description}</p>
                <MarkCompleteButton job={props.contractInfo}/>
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
                <ApproveCompletionButton job={props.contractInfo}/>
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
                <ApplyButton job={props.contractInfo}/>
            </div>
        </>
    );
}

function ApplyButton(props){
    return (
        <>
            <Popup trigger={<button className="popupButton">Apply</button>} modal nested>
            {
                    close => (
                        <div className='modal'>
                            <form>
                                <label>
                                    <textarea name="Message" />
                                </label>
                                <input type="submit" value="Submit Application" />
                            </form>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>  
        </>
    );
}

function Applicant(props){
    return(
        <>
            <div className="chooseApplicant">
                <h4>{props.applicant.toString()}</h4>
                <button>Choose</button>
            </div>
        </>
    );
}

function ViewApplicantsButton(props){
    const contractApplications = [];
    for (let applicant of props.job.applicants){
        contractApplications.push(<Applicant applicant={applicant}/>)
    }

    return (
        <>
            <Popup trigger={<button className="popupButton">View Applicants</button>} modal nested>
            {
                    close => (
                        <div className='modal'>
                            {contractApplications}
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </>
    );
}

function MarkCompleteButton(props){
    return (
        <>
            <button className="popupButton">Mark Complete</button>
        </>
    );
}

function ApproveCompletionButton(props){
    return (
        <>
            <button className="popupButton">Approve Completion</button>
        </>
    );
}