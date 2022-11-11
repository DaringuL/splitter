import React from "react";
import dollar from "../images/icon-dollar.svg"
import person from "../images/icon-person.svg"


function Input(props) {
    let imgSrc;
    let step;
    if (props.type === "bill") {
        imgSrc = dollar;
        step = "0.01"
    }
    if (props.type === "person") {
        imgSrc = person;
        step = "1"
    }

    function inputted({target}) {
       props.setValue(target.value);
    }

    return <div className="input">
        <img className="inputIcon" src={imgSrc} alt={imgSrc}/>
        <input className={"numberInput"} type={"number"} value={props.value} onChange={inputted} min="1" step={step}/>
    </div>
}

export default Input;
