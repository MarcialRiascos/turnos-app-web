const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Estado = sequelize.define('Estado', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    underscored: true, 
  });
  
  module.exports = Estado;