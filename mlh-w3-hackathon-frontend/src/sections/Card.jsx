import "./Card.css";

function Card(props){

    return (
        <div className='card'>
            <div className='cardImageContainer'>
                <img src={props.imgUrl} alt={props.altText}/>
            </div>
            <div className='cardTextContainer'>
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
            </div>
        </div>
    );
}

export default Card;