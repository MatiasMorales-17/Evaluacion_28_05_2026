const Usuario_Privado = require('../data/user');

function validarCredenciales(Username, Password){
    return Username === Usuario_Privado.Username && Password === Usuario_Privado.Password;
}

module.exports = {validarCredenciales};