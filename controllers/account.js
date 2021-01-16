exports.getFunds = (req, res) => {
	// res.json('here are your funds');
	let balance = 23.87;
	res.render('account/funds', {
		pageMessage: `Your current balance is $ ${balance} dollars`,
		path: '/my_funds',
		pageTitle: 'Your funds',
	});
};
exports.getCreateAccount = (req, res) => {
	res.render('account/create', {
		pageMessage: 'Open a bank account here',
		pageTitle: 'Create Account',
		path: '/create_account',
	});
};

exports.getCloseAccount = (req, res, next) => {
	res.render('account/close', {
		pageMessage: 'Close account here',
		pageTitle: 'Close Account',
		path: '/close_account',
	});
};

exports.getDeposit = (req, res) => {
	res.render('account/deposit', {
		pageMessage: 'Make a Deposit',
		pageTitle: 'Deposit',
		path: '/deposit',
	});
};
exports.getWithdraw = (req, res) => {
	res.render('account/withdraw', {
		pageMessage: 'Make a withdrawl',
		pageTitle: 'Withdraw ',
		path: '/withdraw',
	});
};
