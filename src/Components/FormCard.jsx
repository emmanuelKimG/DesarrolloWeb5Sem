import {useState} from "react"
import React from "react";
import '../css/FormCard.css';

const FormCard = () =>{

    const [startCity, setStartCity] = useState("")
    const [endCity, setEndCity] = useState("")
    const [initialDate, setInitialDay] = useState()
    const [finalDate, setFinalDate] = useState()
    
    


    return (
        <div>
        <div className="formCard">
            <div className="siteblock">
                <label htmlFor="startCity">Seleccione sitio de renta</label><br/>
                <input type="text" name="startCity" id="startCity" value={startCity} onChange={e=>setStartCity(e.target.value)}/><br />
                <label htmlFor="endCity">Seleccione sitio de entrega</label><br />
                <input type="text" name="endCity" id="endCity" value={endCity} onChange={e=>setEndCity(e.target.value)} /><br />
            </div>
            <div className="dateblock">
                <label>Fecha de inicio de la renta</label><br />
                <input type="date" name="initialDate" value={initialDate} onChange={e=>setInitialDay(e.target.value)}/>   <br />
                <label>Fecha de final de la renta</label><br />
                <input type="date" name="finalDate" value={finalDate} onChange={e=>setFinalDate(e.target.value)}/><br/>
            </div>          
            
        </div>
            <input type="submit" id="formSubmit" value="Aceptar"/>
        </div>
    )
}

export default FormCard
