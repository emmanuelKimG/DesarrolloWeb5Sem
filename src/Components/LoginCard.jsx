import {useState} from 'react'
import React from 'react';
import '../css/LoginCard.css';
import $ from 'jquery';
window.$ = $;


const LoginCard = () =>{

  //Declaración de entradas useState
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    var data =  $('#loginForm').serializeArray();
    console.log(data);
    fetch('./login',{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify([
        {
          user: user,
          password: password,
        }
      ])
    }).then(response => console.log('Si se hizo paps')); 
    // Aquí se hace una consulta en la base de datos para verificar que existe el usuario
  };


  return(
    <div className ='loginCard'>
      <form action="" id="loginForm" method="post">
        <label  htmlFor='user'>Usuario</label><br/>
        <input type='text' className='shadow-md' id='user' value={user} onChange={(e) => setUser(e.target.value)}/><br/>
        <label  htmlFor='password'>Password</label><br/>
        <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <input type='submit' className="submitLogin text-black" value={'Log In'} onClick = {handleLogin}/>
      </form>
    </div>
  );
} 

export default LoginCard;