import React from "react";


function Status(props) {
    if(props.status === 'error'){
        return (<div className="bg-red-100 border border-red-400 text-text-red-700 px-4 py-3 rounded relative" role={'alert'}>
            <strong className="font-bold text-red-700 block">Error</strong>
            <h1 className=" sm:inline text-red-700">
                {props.message}
            </h1>
        </div>);
        
    }
    if(props.status === 'success'){
        return (<div className="bg-green-100 border border-green-400 text-text-red-700 px-4 py-3 rounded relative" role={'alert'}>
        <strong className="font-bold text-green-700 block">Success</strong>
        <h1 className=" sm:inline text-green-700">
            {props.message}
        </h1>
    </div>);
    }
}


export default Status;