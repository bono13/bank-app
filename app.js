const bodyParser = require('body-parser');
const express = require('express');

const userRouter = require('./routers/user');
require('./db/server');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//ROUTES
app.use(userRouter);

app.listen(port, () => {
	console.log(`Server up on port ${port}`);
});
