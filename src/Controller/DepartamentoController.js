const deptoDAO = require('../Model/DepartamentoDAO')
module.exports= {
    getAllDepto(){
        return deptoDAO.allDepto();
    }
}