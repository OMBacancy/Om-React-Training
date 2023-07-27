import {useRef, useState} from "react";

export default function Input() {
    const ref = useRef(null)
    const [buttonState, setButtonState] = useState(true);
    const [list, setList] = useState([])


    function clickHandler() {
        const data = {"id": list.length + 1, "value": ref.current.value}
        setList([...list, data])
        ref.current.value = ""
        setButtonState(true)
    }

    function inputFieldHandler() {
        if (ref.current.value === "") setButtonState(true)
        else setButtonState(false)

    }

    function removeElement(id) {
        console.log(id)
        let tmp = list.filter(val => val.id !== id);
        setList(tmp);
    }

    return <>
        <input type="text" ref={ref} onChange={inputFieldHandler}/>
        <br/><br/>
        <button onClick={clickHandler} disabled={buttonState}>Submit</button>

        <ul>
            <div>
                {
                    list.map((data, index) => <div key={data.id}
                                                   style={{display: "flex", justifyContent: "space-between"}}>
                        <li>{data.value}</li>
                        <button onClick={() => removeElement(data.id)}>&times;</button>
                    </div>)
                }

            </div>

        </ul>
    </>
}