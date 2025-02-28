import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt={props.altText}/>
            <h5>{props.title}</h5>
            <p>{props.description} </p>
        </div>
    );
}
export default Card;