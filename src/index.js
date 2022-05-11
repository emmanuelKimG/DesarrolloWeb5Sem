import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Footer from './Components/Footer'
import Homepage from './Homepage';
import NavBar from './Components/NavBar'
// Estilos
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='Content'>
      <BrowserRouter >
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element= {<Homepage/>}/>
          <Route path="/catalogo" element= {<Homepage/>}/>
          <Route path="/ofertas" element= {<Homepage/>}/>
          <Route path="/contacto" element= {<Homepage/>}/>  
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
    

);

