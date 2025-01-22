const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Turno = sequelize.define('Turno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    servicio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    administrador_id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'rol',
    timestamps: true,
});

module.exports = Turno;