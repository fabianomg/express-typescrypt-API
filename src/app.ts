import express = require('express');

const app = express();

app.set("port", process.env.PORT || 3000);

app.get('/', (req, res, next) => {
	res.send("hello node");
})

export default app;