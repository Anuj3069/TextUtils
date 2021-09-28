import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnClear = () => {
        let newText = " "
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
        <div style={{backgroundColor:props.mode==='dark'?'grey':'white'}} >
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div class="mb-3">

                    <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-3 " onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3 " onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3 " onClick={handleOnClear}>Clear All</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            </div>
        </>

    )
}
