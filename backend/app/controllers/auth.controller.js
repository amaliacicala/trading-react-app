const db = require('../config/seq.config');
const User = db.user;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// signup controller
exports.signup = async (req, res) => {
	// save new user to database
	const newUser = {
		...req.body,
		password: bcrypt.hashSync(req.body.password, 8), // synchronously encrypt password
	};

	// check if user exists in database
	const searchUser = await User.findOne({ where: { email: req.body.email } });
	if (searchUser === null) {
		User.create(newUser);
		// send the response back to the frontend to display a success message
		res.status(201).send(newUser);
	} else {
		console.log('Email already exists in the database.');
	}
};

// signin controller
exports.signin = async (req, res) => {
	// fetch user from database
	User.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((user) => {
			if (!user) {
				// if user does not exist in the database
				return res.status(404).send({ message: 'User not found.' });
			}

			// check encrypted password validity
			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			// if password is not valid, do not set an access token and throw an error
			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'Password is invalid',
				});
			}

			// take secret from .env file
			if (passwordIsValid) {
				const token = jwt.sign({ id: user.id }, process.env.SECRET, {
					expiresIn: 86400, // token expires in 24 hours
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
