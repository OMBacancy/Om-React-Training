import {useRef, useState} from "react";

export default function Input() {
    const ref = useRef(null)
    const [buttonState, setButtonState] = useState(true);
    const [list, setList] = useState([])

    // list = []

    function clickHandler() {
        setList([ref.current.value, ...list])
        ref.current.value = ""
        setButtonState(true)
    }

    function inputFieldHandler() {
        if (ref.current.value === "") setButtonState(true)
        else setButtonState(false)

    }

    return <>
        <input type="text" ref={ref} onChange={inputFieldHandler}/>
        <button onClick={clickHandler} disabled={buttonState}>Submit</button>

        <ul>
            {
                list.map((data, index) => <li key={index}>{data}</li>)
            }
        </ul>
    </>
}