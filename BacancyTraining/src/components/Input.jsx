import {useRef, useState} from "react";

export default function Input() {
    const ref = useRef(null)
    const [message, setMessage] = useState("");

    function clickHandler() {
        setMessage(ref.current.value);
        console.log(ref);
    }

    function inputHandler() {
        if (ref.current.value === "") setMessage("")
    }

    return <>
        <input type="text" ref={ref}  onChange={inputHandler}/>
        <button onClick={clickHandler}>Submit</button>
        <h2>{message}</h2>
    </>
}