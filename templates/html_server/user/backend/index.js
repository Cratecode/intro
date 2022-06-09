const express = require("express");

const app = express();

let counter = 0;
app.get("/count", (req, res) => {
	res.status(200).send(counter++);
});

app.listen(8000);