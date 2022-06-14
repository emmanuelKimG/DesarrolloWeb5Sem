import React from "react"

function NavButton({text}){

  const iconPicker = (text)=>{
    switch (text){
      case 'Inicio':
        return 'homepage'
      case 'Catálogo':
        return 'catalogo'
      case 'Ofertas':
        return 'offers'
      case 'Contacto':
        return 'contact'
      case 'Perfil':
        return 'usuario'
      default:
        return 'homepage'
    }
  }

  return(
    <button>
      {text}
      <br/>
      <img src={'/assets/images/'+iconPicker(text) + '.png'} alt={iconPicker(text)+'img'}/>
    </button>
  )
}

export default NavButton