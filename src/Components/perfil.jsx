import React, { useState } from "react";
import Title from "./Title"
import UserCard from "./UserCard";


//Estilos:
import '../css/perfil.css'

export default function Profile() {

    const [profilePic, setProfilePic] = useState("assets/images/profilePic.jpg")
    const [username, setUsername] = useState("CoderCat")
    const [email, setEmail] = useState("codingIsMyPassion@catmail.com");
    const [password, setPassword] = useState("contrasena");
    const [address, setAddress] = useState("Mi casita");
    const [phone, setPhone] = useState("3314556578");

    let title = "Perfil de usuario"

    return (
        <div className='userContainer'>
            <Title className='title' color='#F7F4F3' text={title} />
            <div id="userCardContainer">
                <UserCard imgSrc={profilePic} username={username} password={password} address={address} email={email} phone={phone}/>
            </div>
        </div>
    )
    
}