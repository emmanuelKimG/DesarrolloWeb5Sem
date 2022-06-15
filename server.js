const express = require('express');
const path = require('path');
const app = express();
const {connection} = require('./src/database');


app.get('/pepe', (req,res)=> {
    console.log("SIMON");
});

app.post('/login', (req,res) => {
    console.log(req,res);
    res.end();      
});

app.listen(process.env.PORT || 8000);