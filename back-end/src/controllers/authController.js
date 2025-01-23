const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Administrador = require('../models/Administrador');


// Claves secretas para los tokens
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_bearer';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'clave_secreta_refresh';

// Generar tokens
const generateTokens = (admin) => {
  const accessToken = jwt.sign(
    { id: admin.id, nombre: admin.nombre, apellido: admin.apellido, rol_id: admin.rol_id },
    JWT_SECRET,
    { expiresIn: '15m' } // Token Bearer expira en 15 minutos
  );

  const refreshToken = jwt.sign(
    { id: admin.id },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' } // Token Refresh expira en 7 días
  );

  return { accessToken, refreshToken };
};

// Iniciar sesión
const login = async (req, res) => {
  const { documento_identidad, password } = req.body;

  try {
    // Buscar al administrador por documento de identidad
    const admin = await Administrador.findOne({ where: { documento_identidad } });

    if (!admin) {
      return res.status(404).json({ message: 'Credenciales incorrectas' });
    }

    // Verificar si el administrador está activo
    if (admin.estado_id !== 1) { // Asumiendo que 1 significa "activo"
      return res.status(403).json({ message: 'El administrador está inactivo' });
    }

    // Comparar la contraseña
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar tokens
    const tokens = generateTokens(admin);

    return res.status(200).json({
      message: 'Inicio de sesión exitoso',
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      admin: {
        id: admin.id,
      nombre: admin.nombre,
      apellido: admin.apellido,
      email: admin.email,
      },

    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

// Generar un nuevo access token con el refresh token
const refreshToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'El token de refresco es requerido' });
  }

  try {
    // Verificar el token de refresco
    const decoded = jwt.verify(token, JWT_REFRESH_SECRET);

    // Generar un nuevo token de acceso
    const newAccessToken = jwt.sign(
      { id: decoded.id },
      JWT_SECRET,
      { expiresIn: '15m' }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(403).json({ message: 'Token de refresco inválido', error });
  }
};

module.exports = {
  login,
  refreshToken,
};