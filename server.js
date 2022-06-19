const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const connection = require('./src/database');

app.use(express.json());  

app.get('/pepe', (req,res)=> {
    console.log("SIMON");
});

app.post('/login', (req,response) => {
    let user = req.body[0].user;
    let password = req.body[0].password;

    connection.query(`SELECT * FROM users where name='${user}' and password = '${password}'`,(err,res,fields)=> {
        if(err) throw err;
        if(res.length > 0){
            return response.json({
                status: 'success',
                message: `Bienvenido ${user} !`
            });
        };
        return response.json({
            status: 'error',
            message: 'Usuario o contraseña incorrectos'
        });
    });

});


app.post('/register', (req,response) => {
    let email= req.body[0].email;
    let password = req.body[0].password;

    connection.query(`SELECT * FROM users WHERE name = '${email}'`, (err, res, fields) => {
        if(err) throw err;

        console.log(res.length);

        if(res.length > 0){
            return response.json({
                status: 'error',
                message: 'El correo ya esta registrado'
            });
        }
        connection.query(`INSERT INTO users (name,password) VALUES ('${email}', '${password}')`);
        return response.json({
            status: 'success',
            message: 'Se ha registrado correctamente',
        });
    });

   
});


app.listen(process.env.PORT || 8000);



