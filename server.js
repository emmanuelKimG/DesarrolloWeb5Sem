const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const {connection} = require('./src/database');

app.use(express.json());  

app.get('/pepe', (req,res)=> {
    console.log("SIMON");
});

app.post('/login', (req,res) => {
    console.log(req.body);
    connection.query('SELECT * FROM users',(err,res,fields)=> {
        console.log(res);
    });
    res.end();      
});

app.listen(process.env.PORT || 8000);

