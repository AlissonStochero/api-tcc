const usuarioDAO = require('../Model/UsuarioDAO')
module.exports= {
    login(usuario,senha){
        return usuarioDAO.login(usuario,senha);
    }
}