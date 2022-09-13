const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(__dirname), express.static(path.join(__dirname, "user")));

app.listen(3000);
