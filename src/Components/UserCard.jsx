import React, { useState } from "react"
import '../css/UserCard.css'

export default function UserCard({imgSrc, username, email, password, phone, address}){

    let imgSrcCopy = imgSrc
    let usernameCopy = username
    let emailCopy = email;
    let passwordCopy = password
    let phoneCopy = phone
    let addressCopy = address
    
    //Por medio de esta variable altero el render 
    const [showEditUser, setShowEditUser]  = useState(true);
    const [Username, setUsername] = useState(usernameCopy);
    const [Email, setEmail] = useState(emailCopy);
    const [Password, setPassword] = useState("");
    const [Phone, setPhone] = useState(phoneCopy);
    const [Address, setAddress] = useState(addressCopy);
    const [NewPassword, setNewPassword] = useState("");


    const editBtnHandler = () => {
        showEditUser? setShowEditUser(false) : setShowEditUser(true)
    }

    const submitHandler = () =>{
        if(!NewPassword===""){
            if(Password===password){
                setPassword(NewPassword)
                editBtnHandler()
            }
        }else{
            editBtnHandler()
        }
    }


    if(showEditUser){
        return(
            <div className="user_card">
                <img src={imgSrc} alt="Imagen de perfil" id="profilePic"/>
                <h2 id="username">Hola <span><b>{username}</b></span>!</h2>
                <div>
                    <h3>Información de Usuario</h3><br/>
                    <p><b>Correo: </b>{Email}</p><br/>
                    <p><b>Teléfono: </b>{Phone}</p><br/>
                    <p><b>Domincilio: </b>{Address}</p><br />
                </div>
                <div id="btnPannel">
                    <button className="boton">Cerrar Sesion</button>
                    <button className="boton" onClick={editBtnHandler}>Editar Perfil</button>
                </div>
            </div>
        )
    }else if(!showEditUser){
        return(
            <div className="user_card">
                <img src={imgSrc} alt="Imagen de perfil" id="profilePic"/>
                <h2 id="username">Hola <span><b>{username}</b></span>!</h2>
                <div id="editPanel">
                    <h3>Edita tus Datos de Perfil</h3> <br/>
                    <label htmlFor="user">Usuario</label>
                    <input type="text" className="textInput" id='user' value={Username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="email">Correo</label>
                    <input type="text" className="textInput" id='email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">Contraseña</label>
                    <input type={"password"} className="textInput" id='password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="newPassword">Nueva Contraseña</label>
                    <input type={"password"} className="textInput" id='newPassword' value={NewPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                    <label htmlFor="phone">Telefono</label>
                    <input type={"tel"} className="textInput" id='phone' value={Phone} onChange={(e) => setPhone(e.target.value)}/>
                    <label htmlFor="address">Domicilio</label>
                    <input type={"text"} className="textInput" id='address' value={Address} onChange={(e) => setAddress(e.target.value)}/>
                    <button className="Boton" onClick={submitHandler}>Guardar Cambios</button>
                </div>
            </div>
        )
    }

    
}