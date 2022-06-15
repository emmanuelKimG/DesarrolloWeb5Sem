import React from "react";
import Title from "./Title";
import CarCard from "./carCard";

export default function Catalogo(){
    return (
        <div>
            <div className="container shadow-md opacity-95">
                <Title className="title" text={"Catalogo"}/>
                <div className="content-page"> 
                    <p className="text-4xl decoration-8  drop-shadow-lg text-yellow-500 font-bold decoration-solid">Encuentra el auto que necesites, cuando lo necesites</p>
                </div>
            </div>
            
            <div className="bg-black rounded-md shadow-md opacity-95">
                <p className="text-xl font-bold text-center mb-5 m-auto w-90 text-amber-500">Ve las opciones de renta que tenemos para ti </p>
                <div className="place-content-center box-content flex flex-row">
                    <CarCard nombre={"Sedan"} 
                        image={require("../images/sedan.jpeg")}
                        description={"Sedan , 4 puertas"}
                    />
                     <CarCard nombre={"SUV"} 
                        image={require("../images/SUV.jpeg")}
                        description={"SUV , 4 puertas"}
                    />
                     <CarCard nombre={"Coupe"} 
                        image={require("../images/coupe.jpeg")}
                        description={"Coupe ,2 puertas"}
                    />
                </div> 
            </div>
        </div>
   
    );
}


