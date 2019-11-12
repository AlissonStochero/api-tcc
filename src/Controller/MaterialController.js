const materialDAO = require('../Model/MaterialDAO')
module.exports= {
    getAllMateriais(){
        return materialDAO.read();
    },
    getMaterialByPat(cod){
        return materialDAO.metrialByPat(cod)
    }
}