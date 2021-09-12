import React, { useState } from "react";

export default function TextForm(props) {

    const [ipText, setText] = useState("This is my sample input text")

    const convToUpper = ()=>{
        console.log("Convert to UpperCase was clicked for text : " + ipText);
        let textUp = ipText.toUpperCase();
        setText(textUp)
    }

    const convToLower = ()=>{
        console.log("Convert to LowerCase was clicked for text : " + ipText);
        let textLow = ipText.toLowerCase();
        setText(textLow)
    }

    const changeFunc = (event)=>{
        setText(event.target.value)
    }

    return (
        <div>
            <div className="container my-3">
                <h3> {props.ipHeading} </h3>
                <div className="mb-3">
                    <textarea className="form-control mb-5" id="mybox" rows="5" value={ipText} onChange={changeFunc}></textarea>
                </div>
                <button className="btn btn-secondary" onClick={convToUpper}>Convert To Uppercase</button>
                <button className="btn btn-secondary mx-3" onClick={convToLower}>Convert To Lowercase</button>
            </div>
        </div>
    );
}
