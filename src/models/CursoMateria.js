const { DataTypes } = require('sequelize');
const Curso = require('./Curso');
const Materia = require('./Materia');

module.exports = (sequelize) => {
  const CursoMateria = sequelize.define('CursoMateria', {}, {
    tableName: 'curso_materia',
  });

  return CursoMateria;
}