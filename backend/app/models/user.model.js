module.exports = (sequelize, Sequelize) => {
	return sequelize.define('users', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: { type: Sequelize.STRING, allowNull: false },
		surname: { type: Sequelize.STRING, allowNull: false },
		email: { type: Sequelize.STRING, allowNull: false },
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		prefix: { type: Sequelize.INTEGER, allowNull: false },
		phone: { type: Sequelize.STRING, allowNull: false },
	});
};
