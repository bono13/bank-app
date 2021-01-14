//NATIVE NODE MODULES
const path = require('path');
//THIRD PARTY MODULES
const bodyParser = require('body-parser');
const express = require('express');
//ROUTES
const accountRoutes = require('./routes/account');

//ENVIRONMENT VARIABLES
const port = process.env.PORT;

//CREATE EXPRESS APP
const app = express();

//PARSE DATA
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//SET VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/account', accountRoutes);

// npm run dev
app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
