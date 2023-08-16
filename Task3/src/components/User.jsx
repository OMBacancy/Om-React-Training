import {useParams} from "react-router-dom";

export default function User({data}) {
    const param = useParams()
    let temp = {};

    for(const u of data) {
        console.log(u)
        if (+u.id === +param.id) {

            temp = u;
        }
    }

    console.log(temp)
    return <>
        <h1>User {param.id}</h1>
        <p>{temp.id.toString()}</p>
        <p>{temp.userName.toString()}</p>
        <p>{temp.userEmail.toString()}</p>
        <p>{temp.userPassword.toString()}</p>
    </>
}