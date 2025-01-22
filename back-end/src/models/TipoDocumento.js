const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TipoDocumento = sequelize.define('TipoDocumento', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'tipo_documento',
    timestamps: true,
  });
  
  module.exports = TipoDocumento;