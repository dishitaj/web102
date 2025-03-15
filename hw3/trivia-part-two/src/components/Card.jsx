import React from "react";

const Card = ({ question, answer, showAnswer, setShowAnswer }) => {
    return (
        <div className={`card ${showAnswer ? 'flipped' : ''}`} onClick={() => setShowAnswer(!showAnswer)}> 
            <div className="card-inner">
                <div className="card-front">
                    <h3 className="question-title">Question:</h3>
                    <h4 className="question">{question}</h4>
                </div>
                <div className="card-back">
                    <p className="answer">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;