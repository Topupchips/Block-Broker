import "./ContractBlocks.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function YourOpenContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="ContractDescription">{props.contractInfo.description}</p>
                <ViewApplicantsButton job={props.contractInfo}/>
            </div>
        </>
    );
}

export function YourWorkingContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="ContractDescription">{props.contractInfo.description}</p>
                <MarkCompleteButton job={props.contractInfo}/>
            </div>
        </>
    );
}

export function InProgressContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="ContractDescription">{props.contractInfo.description}</p>
                <ApproveCompletionButton job={props.contractInfo}/>
            </div>
        </>
    );
}

export function AvailableContract(props){
    return (
        <>
            <div className={props.classPrefix + "Container ContractContainer"}>
                <div className={props.classPrefix + "TopRow TopRow"}>
                    <h4 className={props.classPrefix + "Title"}>{props.contractInfo.title}</h4>
                    <p className={props.classPrefix + "Budget"}>{props.contractInfo.budget}</p>
                </div>
                <p className="ContractDescription">{props.contractInfo.description}</p>
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
                            <button className="popupCloseButton" onClick=
                                    {() => close()}>
                                        X
                            </button>
                            <h2 className="popupFormTitle">Apply For Contract</h2>
                            <form>
                                <label htmlFor="Message">Message to client</label>
                                <textarea name="Message" />
                                <div className="popupSubmitContainer">
                                    <input className="popupFormSubmit" type="submit" value="Submit Application" />
                                </div>
                            </form>
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
                            <button className="popupCloseButton" onClick=
                                    {() => close()}>
                                        X
                            </button>
                            <h2 className="popupFormTitle">Contract Applicants</h2>
                            {contractApplications}
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
            <Popup trigger={<button className="popupButton">Mark Complete</button>} modal nested>
            {
                    close => (
                        <div className='modal'>
                            <button className="popupCloseButton" onClick=
                                    {() => close()}>
                                        X
                            </button>
                            <h2 className="popupFormTitle">Complete Contract</h2>
                            <form>
                                <label htmlFor="Confirmation" className="checkboxContainer">
                                    <input type="checkbox" name="Confirmation" required/>
                                    I have completed all of the requirements of the project pending approval.
                                </label>
                                <div className="popupSubmitContainer">
                                    <input className="popupFormSubmit" type="submit" value="Submit for Approval" />
                                </div>
                            </form>
                        </div>
                    )
                }
            </Popup>  
            
        </>
    );
}

function ApproveCompletionButton(props){
    return (
        <>
            <Popup trigger={<button className="popupButton">Approve Completion</button>} modal nested>
            {
                    close => (
                        <div className='modal'>
                            <button className="popupCloseButton" onClick=
                                    {() => close()}>
                                        X
                            </button>
                            <h2 className="popupFormTitle">Approve Contract Completion</h2>
                            <form>
                                <label htmlFor="Confirmation" className="checkboxContainer">
                                    <input type="checkbox" name="Confirmation" required/>
                                    All of the project requirements have been fullfilled and payment can be released. There are no takebackseys.
                                </label>
                                <div className="popupSubmitContainer">
                                    <input className="popupFormSubmit" type="submit" value="Approve Completion" />
                                </div>
                            </form>
                        </div>
                    )
                }
            </Popup>
        </>
    );
}