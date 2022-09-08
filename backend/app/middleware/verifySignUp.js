const db = require('../config/seq.config');
const User = db.user;

checkDuplicateData = (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email,
		},
	}).then((user) => {
		if (user) {
			res.status(400).send({
				message: 'Failed - Email is already in use',
			});
			return;
		}
	});
	next();
};

const verifySignUp = {
	checkDuplicateData: checkDuplicateData,
};

module.exports = verifySignUp;
