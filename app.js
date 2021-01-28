const bodyParser = require('body-parser');
const express = require('express');

require('./db/server');
const User = require('./models/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	try {
		res.json('Sanity check...');
	} catch (err) {
		console.log(err);
	}
});

app.post('/', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		// res.json('Sanity check...');
		res.redirect('/success');
	} catch (err) {
		console.log(err);
	}
});

app.get('/success', (req, res) => {
	try {
		res.json('created user');
	} catch (err) {}
});

app.listen(port, () => {
	console.log(`Server up on port ${port}`);
});
