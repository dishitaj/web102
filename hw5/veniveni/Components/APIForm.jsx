import React from "react";
const APIForm = ({inputs, handleChange, onSubmit}) => {
    return(
        <div>
            <form className="form-container">
                {inputs &&
                    Object.entries(inputs).map(([category, value], index) => (
                        <li className="form" key={index}>
                            <h2>{category} </h2>
                            <input
                                type="text"
                                name={category}
                                value={value}
                                placeholder="Input this attribute..."
                                onChange={handleChange}
                                className="textbox"
                            />
                            <br></br>
                            <br></br>
                        </li>
                    ))}
            </form>
            <button type="submit" className="button" onClick={onSubmit}>
                Find A Move to Watch! 🎞
            </button>
        </div>
    );
}
export default APIForm;