exports.getIndex = (req, res) => {
	res.render('index', {
		pageMessage: 'Welcome to the Homepage',
		pageTitle: 'Home',
		path: '/',
	});
};
