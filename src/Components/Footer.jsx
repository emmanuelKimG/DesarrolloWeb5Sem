import '../css/Footer.css'
import React from 'react'
import Logo from './Logo'
function Footer (){
  return(
    <footer>
      <div className='bg-black w-100 grid justify-items-stretch'>
        <div className='logo w-40 inline-block'> 
          <Logo></Logo>
        </div>
        <div className='inline-block w-64 justify-self-center h-100'>
          <p className='text-white text-center'>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer