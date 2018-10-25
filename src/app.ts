import express = require('express');

import * statusController from './controllers/status'


const app = express();

app.set("port", process.env.PORT || 3000);

app.get('/', (req, res, next) => {
	res.send("hello node");
})

export default app;