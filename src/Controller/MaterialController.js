const materialDAO = require('../Model/MaterialDAO')
module.exports= {
    teste(){
       
         return materialDAO.read();
    }
}