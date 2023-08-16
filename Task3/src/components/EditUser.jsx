import {useState} from "react";
import {useParams} from "react-router-dom";
import User from "./User.jsx";

export default function EditUser({data,handleEdit}) {
    const param = useParams()
    let userToBeUpdated = data.filter(d => +d.id === +param.id)
    console.log("User to be updated: " , userToBeUpdated)
    const [user, setUser] = useState(userToBeUpdated[0]);
    console.log("Updated user" , user)
    const handleChange = (name, value) => {
        setUser({...user, [name]: value});

    }



    return <>
        <p>==========================================</p>
        <h1>Edit User</h1>
        <p>==========================================</p>
        <User data={data}/>
        <form onSubmit={(e)=>handleEdit(param.id,user,e)}>
            <label htmlFor="userName">Name: </label>
            <input type="text" id="userName" name="userName" value={user.userName}

                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <br/>
            <label htmlFor="userEmail">Email: </label>
            <input type="email" id="userEmail" name="userEmail" value={user.userEmail}
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <br/>
            <label htmlFor="userPassword">Password: </label>
            <input type="password" id="userPassword" name="userPassword" value={user.userPassword}
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </>
}