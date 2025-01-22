const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Servicio = sequelize.define('Servicio', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    servicio: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'servicio',
    timestamps: true,
  });
  
  module.exports = Servicio;