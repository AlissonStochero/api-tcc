const materialDAO = require('../Model/MaterialDAO')
module.exports= {
    getAllMateriais(){
        return materialDAO.read();
    },
    getMaterialByPat(cod){
        return materialDAO.metrialByPat(cod)
    },
    atualizaDeptoMat(material,id_depto_destino){
        material.depto_id_departamento = id_depto_destino
        return materialDAO.atualizaDeptoMaterial(material)
    }
}