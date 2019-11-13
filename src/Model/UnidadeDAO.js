const pool = require('./connection')
module.exports = {
    allUnidade(){
        const sql = `select * from unidade;`;
        return pool.query(sql);        
    },
    unidadeById(id){
        const sql = `select * from unidade where id_departamento = ${id};`;
        return pool.query(sql);        
    }
}