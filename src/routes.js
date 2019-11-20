const express = require('express');

const routes = express.Router();

const MaterialController = require('./Controller/MaterialController.js');
const UsuarioController = require('./Controller/UsuarioController');
const UnidadeController = require('./Controller/UnidadeController')
const DepartamentoController = require('./Controller/DepartamentoController')

routes.post('/login',async(req,res)=>{
    console.log(req.body)
    const {usuario,senha} = req.body
    const result = await UsuarioController.login(usuario,senha);
    res.json(result)
});

routes.post('/all',async(req,res)=>{
    const result = await MaterialController.getAllMateriais();
    res.json(result)
});
routes.post('/matbypat',async(req,res)=>{
    const codPat = req.body.codPat
    const result = await MaterialController.getMaterialByPat(codPat)
    res.json(result)
});

routes.post('/allunidades',async(req,res)=>{
    const result = await UnidadeController.getAllUnidades()
    res.json(result)
})
routes.post('/alldepto',async(req,res)=>{
    const result = await DepartamentoController.getAllDepto()
    res.json(result)
})

module.exports = routes;