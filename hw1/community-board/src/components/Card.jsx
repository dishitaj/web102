import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img className='img' src={props.image} alt={props.altText}/>
            <h5 className='card-title'>{props.title}</h5>
            <p className='card-description'>{props.description}</p>
        </div>
    );
}
export default Card;