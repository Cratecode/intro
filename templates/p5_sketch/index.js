const express = require("express");
const fs = require("fs");

const app = express();

const getFile = (file) => (req, res) => res.send(fs.readFileSync(file, "utf-8"));
app.get("/", getFile("index.html"));
app.get("/sketch.js", getFile("user/sketch.js"));

app.listen(3000);