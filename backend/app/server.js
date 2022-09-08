const express = require('express');
const cors = require('cors');

const corsOptions = {
	origin: 'http://localhost:3000',
};

const app = express();

// prevent cors errors
app.use(cors(corsOptions));

// parse all requests of content-type (e.g., application/json)
app.use(express.json());

// parse all requests with url-encoded (application-urlencoded)
app.use(express.urlencoded({ extended: true }));

// init first generic route
app.get('/', (req, res) => {
	res.json({ message: 'Everything ok 👌🏻' });
});

// import routes
const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

// set port and listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log('[server] Server up and running');
});

// init MySQL database
const db = require('./config/seq.config');

db.sequelize.sync().then(() => {
	console.log('[database] Database up');
});
