import './App.css'
import Header from "./components/Header.jsx";
import Navigator from "./components/Navigator";
import EditUser from "./components/EditUser.jsx";
import AddUser from "./components/AddUser.jsx";
import Home from "./components/Home.jsx";
import DisplayUser from "./components/DisplayUser.jsx";
import User from "./components/User.jsx"
import Missing from "./components/Missing.jsx"
import {Route, Routes, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function App() {
    const [data, setData] = useState([{
        "id": 1,
        "userName": "admin",
        "userEmail": "admin@gmail.com",
        "userPassword": "admin"
    }])

    const navigate = useNavigate();

    const handleEdit = (id,updatedData,e) =>{
        e.preventDefault();
    console.log(id,updatedData);

    const editedData = data.map(val => +val.id === +id ? updatedData : val)
        setData(editedData);
    navigate("/")
    }
    return (
        <>
            <Header/>
            <Navigator/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/add-user" element={<AddUser data={data} setData={setData}/>}/>
                <Route path="/user/:id" element={<User data={data}/>}/>
                <Route exact path="/user" element={<DisplayUser data={data} setData={setData}/>}/>
                <Route exact path="/edit-user/:id" element={<EditUser data={data} handleEdit={handleEdit}/>}/>
                <Route path="*" element={<Missing/>}/>
            </Routes>
        </>
    )
}


