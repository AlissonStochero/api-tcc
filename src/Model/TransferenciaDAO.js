const pool = require('./connection')
module.exports = {
    salvaTransferencia(transferencia){
        const sql = `insert into transferencia 
        (data_transferencia,depto_destino_id_departamento,depto_origem_id_departamento,material_id_material)
         values ('${transferencia.data_atual}',${transferencia.id_depto_destino},${transferencia.id_depto_origem},${transferencia.id_material})`
        return pool.query(sql);  
    }
}