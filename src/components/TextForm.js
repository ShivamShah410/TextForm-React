import React, { useState } from "react";

export default function TextForm(props) {

    const [ipText, setIpText] = useState("This is my sample input text")
    const [opText, setOpText] = useState("This is my sample Output text")
    
    let wordCount = ipText.replace('\n', ' ').split(" ").filter((e) => {return e.length !== 0}).length;

    const convToUpper = ()=>{
        // console.log("Convert to UpperCase was clicked for text : " + ipText);
        let textUp = ipText.toUpperCase();
        setOpText(textUp);
        props.showAlert("Converted to UpperCase", "success")
    }

    const convToLower = ()=>{
        // console.log("Convert to LowerCase was clicked for text : " + ipText);
        let textLow = ipText.toLowerCase();
        setOpText(textLow);
        props.showAlert("Converted to LowerCase", "success")
    }

    const reset = ()=>{
        setIpText("");
        setOpText("");
    }

    let modeStyle = {}
    if(props.mode === 'dark') {
        modeStyle = {
            backgroundColor: '#005191',
            color: 'white'
        }
    } else {
        modeStyle = {
            backgroundColor: 'white',
            color: 'black'
        }
    }

    const copyTextFunc = ()=>{
        // var text = ipText;
        let text = document.getElementById("myboxoutput");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard !!", "success")
    }

    const removeExtraSpace = ()=>{
        let newText = ipText.split(/[ ]+/);
        setOpText(newText.join(" "));
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
                    <textarea className="form-control mb-5" id="myboxinput" rows="5" value={ipText} onChange={changeIpFunc} style={modeStyle}></textarea>
                </div>
                <hr/>
                <h3>Operations</h3>
                <button disabled={ipText.length === 0} className="btn btn-dark mx-1 my-1" onClick={convToUpper}>Convert To Uppercase</button>
                <button disabled={ipText.length === 0} className="btn btn-dark mx-1 my-1" onClick={convToLower}>Convert To Lowercase</button>
                <button disabled={ipText.length === 0} className="btn btn-dark mx-1 my-1" onClick={reset}>Reset</button>
                <button disabled={ipText.length === 0} className="btn btn-dark mx-1 my-1" onClick={copyTextFunc}>Copy Text</button>
                <button disabled={ipText.length === 0} className="btn btn-dark mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                <hr/>
                <h3> {props.opHeading} </h3>
                <div className="mb-3">
                    <textarea className="form-control mb-5" id="myboxoutput" rows="5" value={opText} onChange={changeOpFunc} style={modeStyle}></textarea>
                </div>
                <hr/>
                <h4>Your text summary</h4>
                <p><b>{ipText===""?0:ipText.split("\n").length}</b> lines, <b>{ipText===""? 0 : wordCount}</b> words, <b>{ipText.length}</b> letters</p>
            </div>
        </div>
    );
}
