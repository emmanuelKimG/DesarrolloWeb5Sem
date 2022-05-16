import {useState} from 'react'

import './LoginCard.css'

const LoginCard = () =>{

  //Declaración de entradas useState
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    //Aquí se hace una consulta en la base de datos para verificar que existe el usuario
  }

  return(
    <div className ='loginCard'>
      <label  htmlFor='user'>Usuario</label><br/>
      <input type='text' className='shadow-md' id='user' value={user} onChange={(e) => setUser(e.target.value)}/><br/>
      <label  htmlFor='password'>Password</label><br/>
      <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      <input type='submit' className="submitLogin text-black" value={'Log In'} onClick = {handleLogin}/>
    </div>
  )
} 

export default LoginCard