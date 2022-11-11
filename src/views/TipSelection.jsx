import React from "react";

function TipSelection(props) {
    let buttons =  document.querySelectorAll(".button");

    function clickHandler({target}) {
        buttons.forEach(button => button.classList.remove("selectedTipButton"));
        target.classList.add("selectedTipButton");
        props.setTip(target.value);
    }

    function customInputHandler({target}){
        let inputtedTip = target.value;
        props.setCustomTip(inputtedTip);
        if (inputtedTip >0 && inputtedTip<100) {
            props.setTip(inputtedTip/100);
            buttons.forEach(button => button.classList.remove("selectedTipButton"));
        }
    }
    return <div className={"tipSelection"}>
        <button className={"tipButton button"}  onClick={clickHandler} value={0.05}>5%</button>
        <button className={"tipButton button"}  onClick={clickHandler} value={0.1}>10%</button>
        <button className={"tipButton button"}  onClick={clickHandler} value={0.15}>15%</button>
        <button className={"tipButton button"}  onClick={clickHandler} value={0.25}>25%</button>
        <button className={"tipButton button"}  onClick={clickHandler} value={0.5}>50%</button>
        <div className={"custom-tip"}> <input id="custom-tip-input" className={"custom-tip-input"} placeholder={"Custom"} type={"number"} onChange={customInputHandler} min="0" max="1" step="0.01" value={props.customTip}/></div>
    </div>
}

export default TipSelection;
