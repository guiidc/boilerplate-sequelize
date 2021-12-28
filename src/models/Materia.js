const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Materia = sequelize.define('Materia', {
    materia: DataTypes.STRING,
  }, {
    tableName: 'materias'
  });

  return Materia;
}
