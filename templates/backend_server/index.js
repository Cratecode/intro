const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const childProcess = require("child_process");

childProcess.exec("node " + path.join(__dirname, "user/backend/index.js") + " &");

const app = express();

app.use("/api", createProxyMiddleware({target: "http://localhost:8000"}));
app.get("/", express.static(path.join(__dirname, "user/html")));

app.listen(3000);