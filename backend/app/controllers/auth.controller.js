const db = require('../config/seq.config');
const config = require('../config/auth.config');
const User = db.user;

const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
	const newUser = {
		...req.body,
		password: bcrypt.hashSync(req.body.password, 8),
	};

	const searchUser = await User.findOne({ where: { email: req.body.email } });
	if (searchUser === null) {
		User.create(newUser);
		// send the response back to the frontend to display a message
		res.status(201).send(newUser);
	} else {
		res.send({ email: 'email already exists' });
	}
};

exports.signin = async (req, res) => {
	User.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((user) => {
			if (!user) {
				return res.status(404).send({ message: 'User not found.' });
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'Password is invalid',
				});
			}

			if (passwordIsValid) {
				const token = jwt.sign({ id: user.id }, process.env.SECRET, {
					expiresIn: 86400, // 24 hours
				});
				res.status(200).send({
					...user,
					message: 'Access granted',
					accessToken: token,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
