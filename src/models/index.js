const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const associations = require('./associations');
const Curso = require('../models/Curso');
const Materia = require('../models/Materia');
const CursoMateria = require('./CursoMateria');

const models = [Curso, Materia, CursoMateria];

const sequelize = new Sequelize(dbConfig);

models.forEach((model) => model(sequelize));

associations(sequelize)

module.exports = {
  Curso,
  Materia,
}

module.exports = sequelize