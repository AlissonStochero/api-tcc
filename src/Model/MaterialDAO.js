const pool = require('./connection')
module.exports = {
    read(){
        const sql = "select * from material;"
        return pool.query(sql);        
    },
    metrialByPat(cod){
        const sql="select patrimonio.cod_patrimonio, material.id_material, material.nome as nome_material, material.valor_atual, material.depto_id_departamento,departamento.nome as nome_depto, departamento.unidade_id_unidade, unidade.nome as nome_unidade FROM material INNER JOIN patrimonio on material.patrimonio_id_patrimonio = patrimonio.id_patrimonio INNER JOIN departamento on material.depto_id_departamento = departamento.id_departamento INNER JOIN unidade on departamento.unidade_id_unidade = unidade.id_unidade WHERE patrimonio.cod_patrimonio="+cod;   
        return pool.query(sql)
    },
    atualizaDeptoMaterial(material){
        const sql=`update material set depto_id_departamento=${material.depto_id_departamento} where id_material = ${material.id_material};`
        return pool.query(sql)
    }
}