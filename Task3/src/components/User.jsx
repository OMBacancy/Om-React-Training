import {useParams} from "react-router-dom";

export default function User({data}) {
    const param = useParams()
    let temp = {};

    for(const u of data) {

        if (+u.id === +param.id) {
            temp = u;
        }
    }

    return <>
        <h1>User #{param.id}</h1>
        <p>User ID: {temp.id.toString()}</p>
        <p>User Name: {temp.userName.toString()}</p>
        <p>User Email: {temp.userEmail.toString()}</p>
        <p>User Password: {temp.userPassword.toString()}</p>
        <p>==========================================</p>
    </>
}