import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';

//Componentes
import Footer from './Components/Footer'
import Homepage from './Homepage';
import NavBar from './Components/NavBar'
import Catalogo from './routes/catalogo/catalogo';
import Contact from './routes/contacto/contacto';
// Estilos
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div className='Content'>
      <Router >
      <NavBar/>
        <div>
          <Routes>
            <Route path="/inicio" element= {<Homepage/>}/>
            <Route path="/catalogo" element= {<Catalogo/>}/>
            <Route path="/ofertas" element= {<Homepage/>}/>
            <Route path="/contacto" element= {<Contact/>}/>  
          </Routes>
        </div>
        </Router>
      <Footer/>
    
    </div>
    
 
);

