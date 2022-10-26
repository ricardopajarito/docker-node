const express = require('express');
const mysql = require('mysql');
const { body, validationResult } = require('express-validator');
const app = express();

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


app.get('/obtener', (req, res) => {
    // const sqlQuery =  'SELECT * FROM codigosPostales LIMIT 10;';
    let cp = '75';
    const sqlQuery = `SELECT * FROM codigosPostales WHERE codigo LIKE '${cp}%'`;

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.send(result)
    });

});

app.post('/googletest', (req, res) => {
    
    console.log(req.body);
    res.send("Recibido")
});

app.listen(9898, () => {
    console.log('Server running!');
});