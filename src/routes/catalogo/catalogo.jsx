import React from "react";
import Title from "../../Components/Title";
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
            
            <div className="container shadow-md opacity-95 block">
                <p className="text-xl font-bold text-center mb-5 text-amber-500">Ve las opciones de renta que tenemos para ti   </p>
                <div className="place-content-center box-content block flex">
                    <CarCard nombre={"Sedan"} 
                        image={"sedan.jpeg"}
                        description={"Sedan , 4 puertas"}
                    />
                     <CarCard nombre={"SUV"} 
                        image={"/assets/SUV.jpeg"}
                        description={"Sedan , 4 puertas"}
                    />
                     <CarCard nombre={"Coupe"} 
                        image={"/assets/coupe.jpeg"}
                        description={"Sedan , 4 puertas"}
                    />
                </div> 
            </div>
        </div>
   
    );
}


