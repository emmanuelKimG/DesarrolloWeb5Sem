import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Estilos
import './index.css';

//Componentes
import Footer from './Components/Footer'
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar'
import Catalogo from './Components/catalogo';
import Contact from './Components/contacto';
import Profile from "./Components/perfil";
import Ofertas from './Components/ofertas';
import Registro from './Components/registro';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div className='Content'>
      <Router >
      <NavBar/>
        <div>
          <Routes>
            <Route path="/inicio" element= {<Homepage/>}/>
            <Route path="/catalogo" element= {<Catalogo/>}/>
            <Route path="/ofertas" element= {<Ofertas/>}/>
            <Route path="/contacto" element= {<Contact/>}/>  
            <Route path='/perfil' element= {<Profile/>}/>
            <Route path='/register' element= {<Registro/>}/>
          </Routes>
        </div>
        </Router>
      <Footer/>
    
    </div>
    
 
);

