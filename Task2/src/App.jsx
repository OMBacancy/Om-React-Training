import {useState, useEffect} from 'react'
import './App.css'


export function IncrementDecrementApp() {
    // count state to keep track of `count`
    const [count, setCount] = useState(0)

    // useEffect() to update the Application title whenever IncrementDecrementApp component is mounted
    // Additionally when IncrementDecrementApp component is unmounted the title changes back to "Default App"
    // This useEffect() is independent of dependencies
    useEffect(() => {
        // executes when IncrementDecrementApp is mounted
        document.title = "useEffect() Demo"
        return () => {
            // executes when IncrementDecrementApp is unmounted
            document.title = "Default App"
        }
    })

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(prev => prev - 1)}}>-</button>
            <button onClick={() => {setCount(0)}}>Reset</button>
            <button onClick={() => {setCount(prev => prev + 1)}}>+</button>
        </>
    )
}

export default function App() {
    const [val, setVal] = useState(false)
    return (
        <>
            // With the use of `val` state, we conditionally handle the mounting and unmounting of IncrementDecrementApp component
            {val && <IncrementDecrementApp/>}
            <br/><br/>
            <div style={{display: "flex" }}>
                <button onClick={() => setVal(true)}>Load App</button>
                <br/><br/>
                <button onClick={() => setVal(false)}>Unload App</button>
            </div>
        </>
    )
}

