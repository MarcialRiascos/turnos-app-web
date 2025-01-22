const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Administrador = sequelize.define('Administrador', {
    id: {
      type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  }, {
    tableName: 'administrador',
    timestamps: true,
  });
  
  module.exports = Administrador;