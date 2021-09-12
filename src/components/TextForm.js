import React, { useState } from "react";

export default function TextForm(props) {

    const [ipText, setIpText] = useState("This is my sample input text")
    const [opText, setOpText] = useState("This is my sample Output text")

    const convToUpper = ()=>{
        // console.log("Convert to UpperCase was clicked for text : " + ipText);
        let textUp = ipText.toUpperCase();
        setOpText(textUp);
    }

    const convToLower = ()=>{
        // console.log("Convert to LowerCase was clicked for text : " + ipText);
        let textLow = ipText.toLowerCase();
        setOpText(textLow);
    }

    const reset = ()=>{
        setIpText("");
    }

    const changeIpFunc = (event)=>{
        setIpText(event.target.value);
    }

    const changeOpFunc = (event)=>{
        setOpText(event.target.value);
    }

    return (
        <div>
            <div className="container my-3">
                <h3> {props.ipHeading} </h3>
                <div className="mb-3">
                    <textarea className="form-control mb-5" id="myboxinput" rows="5" value={ipText} onChange={changeIpFunc}></textarea>
                </div>
                <hr/>
                <h3>Operations</h3>
                <button className="btn btn-secondary" onClick={convToUpper}>Convert To Uppercase</button>
                <button className="btn btn-secondary mx-3" onClick={convToLower}>Convert To Lowercase</button>
                <button className="btn btn-secondary" onClick={reset}>Clear Text</button>
                <hr/>
                <h3> {props.opHeading} </h3>
                <div className="mb-3">
                    <textarea className="form-control mb-5" id="myboxoutput" rows="5" value={opText} onChange={changeOpFunc}></textarea>
                </div>
                <hr/>
                <h4>Your text summary</h4>
                <p>{ipText===""?0:ipText.split("\n").length} lines, {ipText===""?0:ipText.replace("\n", " ").split(" ").length} words, {ipText.length} letters</p>
            </div>
        </div>
    );
}
