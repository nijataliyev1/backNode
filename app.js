const fs =require('fs');
const express = require('express');

const server = express();

const a = fs.readFileSync('./data.json')

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // İstəyə görmək üçün hamıya izin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

server.get('/',(req,res) => {
    res.send(JSON.parse(a));
})


server.listen(5000, () => {
    console.log("Succesed!!!")
})

