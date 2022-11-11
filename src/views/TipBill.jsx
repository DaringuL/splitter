import React from "react";
function TipBill (props){
    let shownTipAmount = "0.00";
    let shownTotal = "0.00";
    if (props.tipAmount !== undefined&& props.tipAmount>0){
        shownTipAmount = Math.round(props.tipAmount*100)/100;
        shownTipAmount.toFixed(2);
    }
    if (props.total !== undefined&& props.total>0){
        shownTotal = Math.round(props.total*100)/100;
        shownTotal.toFixed(2);
    }


    return <div className={"tipBill"}>
        <div className={"tipGroup"}>
            <div className={"amount"}>
                Tip Amount <br/>
                / person
            </div>
            <div className={"number"}>
                <h5>{"$" + shownTipAmount}</h5>
            </div>
            <div className={"amount total"}>
                Total <br/>
                / person
            </div>
            <div className={"number"}>
                <h5>{"$" + shownTotal}</h5>
            </div>
            <button className={"reset-button"} onClick={props.reset}>RESET</button>
        </div>
    </div>
}
export default TipBill;