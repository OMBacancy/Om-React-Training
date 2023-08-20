# Task: Demonstrate React Life-cycle using useEffect()

Using `useEffect()` without any dependency, mounted and unmounted the IncrementDecrementApp component conditionally using `useState()` successfully demonstrated React Life-cycle.

# useEffect() snippet
```
useEffect(() => {
        // executes when IncrementDecrementApp is mounted
        document.title = "useEffect() Demo"
        return () => {
            // executes when IncrementDecrementApp is unmounted
            document.title = "Default App"
        }
})
```

# useState() snippet
```
const [val, setVal] = useState(false)
...
    {val && <IncrementDecrementApp/>}
```