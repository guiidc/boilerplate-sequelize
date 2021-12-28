const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Curso = sequelize.define('Curso', {
    curso: DataTypes.STRING,
  }, {
    tableName: 'cursos'
  });

  return Curso;
}
