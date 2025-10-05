import React, { useState } from "react";

export const LiftState = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
        <div> just for checking the only required are rerendered or all are rerendered [ ye nhi ho rha h ]</div>
  
            <InputComponet inputValue={inputValue} setInputValue ={setInputValue}/>
            <DisplayComponent inputValue={inputValue}/>
 
        </>
    );
}

const InputComponet = ({inputValue,setInputValue}) => {
    // yhe se uplift krke parent componet me state bana do { va va va} 
    // const [inputValue, setInputValue] = useState("");
    return (
        <>
            <input 
                type="text"
                placeholder="Enter your name" 
                value={inputValue}
                onChange={(e)=>{ setInputValue(e.target.value)}} // without this like i was not able to fill the input field. 
                >
            </input>
        </>
    );
}

const DisplayComponent = ({inputValue}) => {
    return(
        <>
            <p>The current Input Value is : {inputValue}</p>
        </>
    );
}