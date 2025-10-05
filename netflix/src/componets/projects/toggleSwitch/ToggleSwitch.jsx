import { useState } from "react"
import "./ToggleSwitch.css"
import { MdEmojiEmotions } from "react-icons/md";

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState("ON")
    return (
        <>
        <MdEmojiEmotions style={{fontSize:"30px",margin: "40px"}} />
        <div
            className={'toggle-switch'}
            style={{ backgroundColor: isOn=='ON'? '#4caf50': ''  }} //f44336 for red color  
            onClick={() => {
                if (isOn === 'ON') {
                    setIsOn("OFF")
                } 
                else {
                    setIsOn("ON")
                }
            }}>
            <div className={`switch ${isOn === 'ON' ? 'on' : 'off'}`}>
                <span className="switch-state">
                    {isOn}
                </span>
            </div>
        </div>
        </>
    )
}
