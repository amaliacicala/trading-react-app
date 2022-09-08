require('dotenv/config');

module.exports = {
	HOST: 'localhost',
	USER: 'root',
	PASSWORD: process.env.MYSQL_PASSWORD,
	DB: 'optionsfyDB-2',
	dialect: 'mysql',
	pool: {
		min: 0,
		max: 3,
		acquire: 30000,
		idle: 10000,
	},
};
