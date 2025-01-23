const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const TipoDocumento = require('../models/TipoDocumento');
const Sexo = require('../models/Sexo');
const Rol = require('../models/Rol');
const Estado = require('../models/Estado');

const Administrador = sequelize.define('Administrador', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_documento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    documento_identidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono_dos: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sexo_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    estado_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
  }, {
    tableName: 'administrador',
    timestamps: true,
    underscored: true,
  });

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
  
  module.exports = Administrador;