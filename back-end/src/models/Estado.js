const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Estado = sequelize.define('Estado', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'estado',
    timestamps: true,
  });
  
  module.exports = Estado;