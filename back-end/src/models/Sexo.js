const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Sexo = sequelize.define('Sexo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'rol',
    timestamps: true,
  });
  
  module.exports = Sexo;