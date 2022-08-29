//Init mySql
const db = require('../models');
const User = db.user;

//Import JWT and Bcrypt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//Sign up
exports.signup = async (req, res) => {
	const newUser = {
		...req.body,
		password: bcrypt.hashSync(req.body.password, 8),
	};

	const searchUser = await User.findOne({ where: { email: req.body.email } });
	if (searchUser === null) {
		User.create(newUser);
		//Send the response back to the frontend to display a message
		res.status(201).send(newUser);
	} else {
		res.send({ email: 'email already exists' });
	}
};

//Sign in
exports.signin = async (req, res) => {
	//Search for user in the DB
	const loggedUser = await User.findOne({ where: { email: req.body.email } });

	if (loggedUser) {
		//Decrypt password
		const passwordIsValid = bcrypt.compareSync(
			req.body.password,
			loggedUser.password
		);
		if (passwordIsValid) {
			//Create a new access token
			// const accessToken = jwt.sign(
			// 	{ id: loggedUser.id },
			// 	process.env.ACCESS_TOKEN_SECRET
			// );
			res.send({
				...loggedUser,
				message: 'Access granted',
				// accessToken: accessToken,
			});
		} else {
			res.status(401).send({ message: 'Invalid password' });
		}
	} else {
		res.status(400).send({ message: 'User not found' });
	}
};
