import NavButton from './NavButton'
import Logo from './Logo'

import './NavBar.css'

function NavBar (){
  return (
    <nav className='navBar'>
      <div  className = 'logo'><Logo/></div>
      <div className = 'navButtonGroup'>
        <NavButton text = {'Inicio'}/>
        <NavButton text = {'Catálogo'}/>
        <NavButton text = {'Ofertas'}/>
        <NavButton text = {'Contacto'}/>
        <NavButton text = {'Perfil'}/>
      </div>
    </nav>
  )
}

export default NavBar;