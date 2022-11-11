import React, {useEffect, useState} from "react";
import Label from "./Label";
import Input from "./Input"
import TipSelection from "./TipSelection";
import TipBill from "./TipBill";

function Calculator() {
    const [bill, setBill] = useState([0]);
    const [persons, setPersons] = useState([0]);
    const [tip, setTip] = useState([]);
    const [tipAmount, setTipAmount] = useState();
    const [customTip, setCustomTip] = useState();
    const [total, setTotal] = useState();

    useEffect(function () {
        setTipAmount(function () {
                if (bill > 0 && persons > 0) {
                    let perPerson = bill/persons;
                    if (tip>0) {
                        setTotal(perPerson + perPerson*tip);
                        return bill / persons * tip
                    } else {setTotal(perPerson)}
                } else {
                    return 0
                }
            }
        );
    }, [bill, tip, persons]);

    function reset(){
        setBill([0]);
        setPersons([0]);
        setTip([]);
        setCustomTip([]);
        setTipAmount([]);
        setTotal([]);
        let buttons =  document.querySelectorAll(".button");
        buttons.forEach(button => button.classList.remove("selectedTipButton"));
    }

    return <div className="calculator-card">
        <div className={"input-group"}>
        <Label tag="Bill"/>
        <Input type="bill" setValue={setBill} value={bill}/>
        <Label tag="Select Tip %"/>
        <TipSelection setTip={setTip} value={tip} customTip={customTip} setCustomTip={setCustomTip}/>
        <Label tag="Number of People"/>
        <Input type="person" setValue={setPersons} value={persons}/>
        </div>
        <TipBill tipAmount={tipAmount} total={total} reset={reset}/>
    </div>
}

export default Calculator;