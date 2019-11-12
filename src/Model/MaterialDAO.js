const pool = require('./connection')
module.exports = {
    read(){
        const sql = "select * from material;"
        return pool.query(sql);
        
    }
}