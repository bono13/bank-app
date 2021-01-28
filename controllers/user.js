const User = require('../models/user');

exports.getIndex = (req, res) => {
	try {
		res.json('Index');
	} catch (err) {
		console.log(err);
	}
};

exports.getUser = async (req, res) => {
	try {
		const user = await User.find({});

		res.json(user);
	} catch (err) {
		console.log(err);
	}
};

exports.postAddUser = async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		console.log('USER ADDED');
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
};
