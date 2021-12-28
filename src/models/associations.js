module.exports = (sequelize) => {
  const { Curso, Materia, CursoMateria } = sequelize.models;

  Curso.belongsToMany(Materia, {
    as: 'materias',
    through: CursoMateria,
    foreignKey: 'curso_id',
    otherKey: 'materia_id',
  });
  
  Materia.belongsToMany(Curso, {
    as: 'cursos',
    through: CursoMateria,
    foreignKey: 'materia_id',
    otherKey: 'curso_id',
  });
  
}