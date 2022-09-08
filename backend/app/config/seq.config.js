const config = require('../config/db.config.js');
const Sequelize = require('sequelize');

// pass the db.config to a new Sequelize object
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	operatorsAliases: false,
	pool: {
		min: config.pool.min,
		max: config.pool.max,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

// create db instance
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// import user model and assign them to new properties of the db object
db.user = require('../models/user.model')(sequelize, Sequelize);

module.exports = db;
