const Administrador = require('../models/Administrador');
const TipoDocumento = require('../models/TipoDocumento');
const Sexo = require('../models/Sexo');
const Rol = require('../models/Rol');
const Estado = require('../models/Estado');
const Servicio = require('../models/Servicio');
const Turno = require('../models/Turno');

// Definir asociaciones
const defineAssociations = () => {
  // Relaciones para Administrador
  Administrador.belongsTo(TipoDocumento, {
    foreignKey: 'tipo_documento_id',
    as: 'tipoDocumento',
  });

  Administrador.belongsTo(Sexo, {
    foreignKey: 'sexo_id',
    as: 'sexo',
  });

  Administrador.belongsTo(Rol, {
    foreignKey: 'rol_id',
    as: 'rol',
  });

  Administrador.belongsTo(Estado, {
    foreignKey: 'estado_id',
    as: 'estado',
  });

  // Relaciones para Turno
  Turno.belongsTo(Servicio, {
    foreignKey: 'servicio_id',
    as: 'servicio',
  });

  Turno.belongsTo(Administrador, {
    foreignKey: 'administrador_id',
    as: 'administrador',
  });

  Turno.belongsTo(Estado, {
    foreignKey: 'estado_id',
    as: 'estado',
  });
};

// Exportar la función
module.exports = defineAssociations;