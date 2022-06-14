
import React from "react";

const CarCard = ({image, nombre, description}) => {
    return (
        <div className="m-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:opacity-100 dark:bg-gray-800 shadow-cyan-500 hover:drop-shadow-xl">
            <img src={image} alt="" className="rounded-t-lg"/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                    {nombre}
                </h5>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CarCard;