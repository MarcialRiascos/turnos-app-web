const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Administrador = require('../models/Administrador');
const Estado = require('../models/Estado');
const Servicio = require('../models/Servicio');
const Turno = require('../models/Turno');

const Turno = sequelize.define('Turno', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    servicio_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    administrador_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono_dos: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha_turno: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
}, {
    tableName: 'rol',
    timestamps: true,
    underscored: true, 
});

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

module.exports = Turno;