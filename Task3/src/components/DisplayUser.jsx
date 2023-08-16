import {Link, useNavigate} from "react-router-dom";

export default function DisplayUser({data, setData}) {
    function deleteHandler(id) {
        const afterDelete = data.filter((d) =>
            d.id !== id
        )
        setData(afterDelete)
        alert(`User with ID: ${id} deleted successfully`)
    }

    const navigate = useNavigate();
    return <>
        <p>==========================================</p>
        <h1>User List</h1>
        <p>==========================================</p>
        <div>
            {
                data.map(user =>
                    <div key={user.id} style={{display: "flex", justifyContent: "space-evenly"}}>
                        <div>
                            <p>
                                Name: {user.userName}
                            </p>
                            <p>
                                Email: {user.userEmail}
                            </p>
                            <p>
                                Password: {user.userPassword}
                            </p>
                            <button onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</button>
                            <button onClick={() => deleteHandler(user.id)}>&times;</button>
                            <p>==========================================</p>
                        </div>
                    </div>
                )
            }
        </div>
    </>
}