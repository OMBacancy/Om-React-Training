export default function Button() {
    function eventHandler() {
        return <h2>Input Text</h2>
    }
    return <>
        <button type={"submit"} onSubmit={eventHandler}>View</button>
    </>
}

