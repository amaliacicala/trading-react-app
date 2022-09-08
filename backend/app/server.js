const express = require('express');
const cors = require('cors');

const app = express();

// prevent cors errors
app.use(cors());

// parse all requests of content-type (e.g., application/json)
app.use(express.json());

// parse all requests with url-encoded (application-urlencoded)
app.use(express.urlencoded({ extended: true }));

// init first generic route
app.get('/', (req, res) => {
	res.json({ message: 'everything ok' });
});

// import routes
require('./routes/auth.routes');

// set port and listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log('[server] Server up and running');
});

// init MySQL database
const db = require('./config/seq.config');

db.sequelize.sync().then(() => {
	console.log('[db] Database up');
});
