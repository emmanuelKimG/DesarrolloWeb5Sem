import './NavBar'
import React from 'react'
import LoginCard from './LoginCard'
import Title from './Title'
import FormCard from './FormCard'
import SliderCard from './SliderCard'

import '../css/Homepage.css';

function Homepage() {

  let title = "Pagina Principal"

  return (
    <div className='container'>
      <Title className='title' color = '#F7F4F3' text = {title}/>
      <div className= 'slider_card'>
        <SliderCard/>
        
      </div>
      <div className='login-signup_card'>
        <h3 className='mb-4'>{'Login'}</h3>
        <div className='ml-4'>
          <LoginCard/>
        </div>
      </div>
      <div className='form_card'>
        <h3>{'Formulario'}</h3>
        <FormCard/>
      </div>
      <div className="faq_card">
        <h3>{'FAQs'}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga in minus temporibus dignissimos placeat earum consequatur quo dolorem fugit omnis, dolor perferendis amet. Nobis nulla et delectus magnam excepturi.<br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga in minus temporibus dignissimos placeat earum consequatur quo dolorem fugit omnis, dolor perferendis amet. Nobis nulla et delectus magnam excepturi.<br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga in minus temporibus dignissimos placeat earum consequatur quo dolorem fugit omnis, dolor perferendis amet. Nobis nulla et delectus magnam excepturi.<br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga in minus temporibus dignissimos placeat earum consequatur quo dolorem fugit omnis, dolor perferendis amet. Nobis nulla et delectus magnam excepturi.<br/><br/>
        </p>
      </div>
    </div>
  )
}

export default Homepage;
