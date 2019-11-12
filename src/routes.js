const express = require('express');
const MaterialController = require('./Controller/MaterialController.js');
const routes = express.Router();
const pool = require('./Model/connection')

routes.post('/teste',async(req,res)=>{
    const result =  MaterialController.teste()
    console.log(req.body)
    console.log(result)
    res.json(result)
});
routes.post('/testing',async(req,res)=>{
    const result = await pool.query("select * from material;")
    console.log(req.body)
    console.log(result)
    res.json(result)
});

module.exports = routes;