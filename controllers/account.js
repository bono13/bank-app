exports.getFunds = (req, res) => {
	// res.json('here are your funds');
	let balance = 23.87;
	res.render('account/funds', {
		pageMessage: `Your current balance is $ ${balance} dollars`,
	});
};
exports.getOpenAccount = (req, res) => {
	res.json('open account here');
};

exports.getCloseAccount = (req, res, next) => {
	res.json('close account here');
};

exports.getInsertFunds = (req, res) => {
	res.json('add to balance');
};
exports.getWithdrawFunds = (req, res) => {
	res.json('withdraw from balance');
};
