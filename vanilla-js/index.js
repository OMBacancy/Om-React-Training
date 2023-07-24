// used fetch() to get data from an API/URL
const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')

// Promise object fetchUser has async function which will await the response to convert into JSON format
// then() and catch() functions are optional along with Promise object
// then() executes if Promise is successful/fulfilled
// catch() executes if Promise is failed/rejected
fetchUser.then(async (response)=>{
    console.log(await response.json())
}).catch((error)=>{
    console.log(error)
})