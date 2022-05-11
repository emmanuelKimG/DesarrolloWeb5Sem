import './Components/NavBar'
import LoginCard from './Components/LoginCard'
import Title from './Components/Title'

import './Homepage.css'

function Homepage() {

  let title = "Pagina Principal"

  return (
    <div className='container'>
      <Title className='title' color = '#F7F4F3' text = {title}/>
      <div className= 'slider_card'>
        <img alt='tsuru_tuneado' src='tsuru_tuneado.jpg' height='210px'/>
      </div>
      <div className='login-signup_card'>
        <h3>{'Login'}</h3>
        <LoginCard/>
      </div>
      <div className='form_card'>
        <h3>{'Formulario'}</h3>
        <p>{'Formulario'}</p>
      </div>
      <div className="faq_card">
        <h3>{'FAQs'}</h3>
      </div>
    </div>
  )
}

export default Homepage;
