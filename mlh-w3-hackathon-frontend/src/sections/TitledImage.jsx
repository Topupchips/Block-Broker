import "./TitledImage.css"

function TitledImage(props){
  
    //console.log("foldedOut: " + this.state.foldedOut.toString() + ", class: " + foldOutClass);
    return (
            <div className="ImageFoldout" id={props.compId}>
                <div className='foldoutImageContainer'>
                    <img src={props.imgUrl} alt={props.alt}/>
                </div>
                <div className='foldoutImageTitle'>
                    <h3>{props.title}</h3>
                </div>
                <p className="titledImageDescription">{props.description}</p>
            </div>
    );
}

export default TitledImage;