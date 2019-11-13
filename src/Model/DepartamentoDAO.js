const pool = require('./connection')
module.exports = {
    allDepto(){
        const sql = `select * from departamento;`;
        return pool.query(sql);        
    },
    deptoById(id){
        const sql = `select * from departamento where id_departamento = ${id};`;
        return pool.query(sql);        
    }
}