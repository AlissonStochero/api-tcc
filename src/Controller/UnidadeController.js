const unidadeDAO = require('../Model/UnidadeDAO')
module.exports= {
    getAllUnidades(){
        return unidadeDAO.allUnidade()
    }
}