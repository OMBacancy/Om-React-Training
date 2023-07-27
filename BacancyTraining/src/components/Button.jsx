export default function Button(props) {
    function eventHandler() {
        return <h2>{props.message}</h2>
    }
    return <>
        <button type={"submit"} onClick={eventHandler}>Submit</button>
    </>
}

