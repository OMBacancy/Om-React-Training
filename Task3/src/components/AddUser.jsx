import {useState} from "react";

export default function AddUser({data,setData}) {

    const [user,setUser] = useState({
        "userName": "",
        "userEmail": "",
        "userPassword": ""
    });

    const handleChange = (name,value) => {
        setUser({...user, [name]:value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            ...user,
            id: data.length +1
        }

        setData([...data,userData]);
        setUser({ "userName": "",
            "userEmail": "",
            "userPassword": ""})
        alert(user.userName + " added successfully!");
    }

    return <>
        <p>==========================================</p>
        <h1>Add User</h1>
        <p>==========================================</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Name: </label>
            <input type="text" id="userName" name="userName" value={user.userName}  onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
            <br/>
            <label htmlFor="userEmail">Email: </label>
            <input type="email" id="userEmail" name="userEmail" value={user.userEmail} onChange={(e)=>handleChange(e.target.name,e.target.value)} />
            <br/>
            <label htmlFor="userPassword">Password: </label>
            <input type="password" id="userPassword" name="userPassword" value={user.userPassword} onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </>
}