const pool = require('./connection')
module.exports = {
    login(usuario,senha){
        const sql = `select * from usuario where nome_usuario = '${usuario}' and senha = ${senha};`;
        return pool.query(sql);        
    }
}