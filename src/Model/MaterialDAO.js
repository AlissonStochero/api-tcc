const pool = require('./connection')
module.exports = {
    read(){
        const sql = "select * from material;"
        return pool.query(sql);        
    },
    metrialByPat(cod){
        const sql="Select * from material inner join "+
        "patrimonio on patrimonio.id_patrimonio = material.patrimonio_id_patrimonio "
        +"and patrimonio.cod_patrimonio = "+cod;
        return pool.query(sql)
    }
}