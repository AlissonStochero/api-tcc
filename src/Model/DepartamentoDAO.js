const pool = require('./connection')
module.exports = {
    allDepto(){
        const sql = `select * from departamento;`;
        return pool.query(sql);        
    },
    deptoAndUnidade(){
        const sql = `select departamento.id_departamento, departamento.nome as departamento_nome, unidade.id_unidade, unidade.nome as unidade_nome from departamento inner join unidade on departamento.unidade_id_unidade = unidade.id_unidade order by unidade.nome asc;`;
        return pool.query(sql);        
    },
    deptoById(id){
        const sql = `select * from departamento where id_departamento = ${id};`;
        return pool.query(sql);        
    }
}