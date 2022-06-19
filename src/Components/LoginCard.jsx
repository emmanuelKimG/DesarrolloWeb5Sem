import {useState} from 'react'
import React from 'react';
import '../css/LoginCard.css';
import { Link } from "react-router-dom";
import Status from './status';

const LoginCard = () =>{

  //Declaración de entradas useState
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('./login',{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify([
        {
          user: user,
          password: password,
        }
      ])
    })
    .then(response => response.json()).then( data => {
      console.log(data);
      setStatus(data.status);
      setMessage(data.message);
    })
    .catch(e => console.log(e)); 
    // Aquí se hace una consulta en la base de datos para verificar que existe el usuario
  };


  return(
    <div className ='loginCard'>
      <form action="" id="loginForm" method="post">
        <label  htmlFor='user'>Usuario</label><br/>
        <input type='text' className='shadow-md' id='user' value={user} onChange={(e) => setUser(e.target.value)}/><br/>
        <label  htmlFor='password'>Password</label><br/>
        <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <input type='submit' className="submitLogin text-black w-20" value={'Log In'} onClick = {handleLogin}/>
        <Link to={'/register'}><button className='w-20 ml-5 hover:bg-yellow-300'>Register</button></Link>
      </form>
      <Status status={status} message={message}/>
    </div>
  );
} 

export default LoginCard;