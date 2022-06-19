import React from "react";
import Title from "./Title";
import Status from "./status";

class Registro extends React.Component {

    constructor(props){
        super(props);

        this.state =  {
            email : "",
            password : "",
            confirmPassword : "",
            status : "",
            statusMessage: "",
         };
        
        this.onChange = this.onChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    
    handleSubmit(e){
        e.preventDefault();
        if(this.state.confirmPassword === this.state.password){
            fetch('/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(
                    [
                        {
                            email : this.state.email,
                            password : this.state.password,
                        }
                    ]
                ),
            }).then( response => response.json()).then((data) => {
                console.log(data, data.message, data.status);
                this.setState({
                    status : data.status,
                    statusMessage: data.message
                });

                if(data.status === 'success'){
                    setInterval(()=>{
                        window.location.href = '/inicio';
                    },2000);
                }
            });  
        }else{ 
            this.setState({
                status: "error",
                statusMessage: "No coinciden las contraseñas"
            });
        }
    }

    onChange(e){
        const target = e.target;
        const value = target.value;
        const name  = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div className="rounded bg-black mx-auto my-5 w-5/6 h-screen shadow shadow-yellow-500 p-5">
                <Status status={this.state.status} message={this.state.statusMessage}/>
                <p className="text-yellow-200"> Registro <Title text={"Registrate con nostros!"}></Title> </p>
                <div className="flex m-5 h-96 mx-auto w-full p-5 bg-gray-500 rounded">
                   <form className="w-full max-w-sm p-5">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Correo
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" name="email" onChange={this.onChange} value={this.state.email} type="email" placeholder="example@example.com"/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Contraseña
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-password" onChange={this.onChange} value={this.state.password} name="password" type="password" placeholder="******************"/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Repetir Contraseña
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="confirm-password" value={this.state.confirmPassword} onChange={this.onChange} name="confirmPassword" type="password" placeholder="******************"/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3"></div>
                            <label className="md:w-2/3 block text-black font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm">
                                Enviarme Notificaciones 
                            </span>
                            </label>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                            <button className="shadow bg-yellow-600 hover:bg-yellow-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={this.handleSubmit} type="button">
                                Registrarse
                            </button>
                            </div>
                        </div>
                        </form>
                        <div className="ml-5 w-3/4 p-5 sm:w-full">
                            <h1 className="text-5xl text-yellow-500 p-5">Registrate Ahora! <br /> Y Obten un 10% de <br /> descuento <br /> en tu primera renta</h1>
                        </div>
                </div>
            </div>
        );
    }


}

export default Registro;