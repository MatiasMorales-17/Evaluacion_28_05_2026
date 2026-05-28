const authService = require('../services/authService');

exports.login = (req, res) => {
  const { Username, Password } = req.body;

  try {
    if (authService.validarCredenciales(Username, Password)) {
      req.session.usuario = Username;
      res.json({ success: true, mensaje: 'Login exitoso', usuario: Username });
    } else {
      res.status(401).json({ success: false, error: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.json({ success: true, mensaje: 'Sesión cerrada' });
};

exports.verSesion = (req, res) => {
  if (req.session.usuario) {
    res.json({ usuario: req.session.usuario });
  } else {
    res.status(401).json({ error: 'No autenticado' });
  }
};