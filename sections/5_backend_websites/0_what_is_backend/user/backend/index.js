// First, we need to import express.
// Express is a library that makes it super easy to create web servers.
const express = require("express");

// We need to create a new express "instance" to use it.
const app = express();

// This is the main thing that we care about in this file.
// First, it makes a counter variable that stores the current counter.
let counter = 0;

// After that, we use app.get() to response to requests on http://localhost:8000/count.
app.get("/count", (req, res) => {
    // req has info about the request (who sent it, etc).
    // res lets us respond to the request.
    
    // We send status code 200 (which means that the request was successful), then send the counter as our data. counter++ means add 1 to counter and return the old value of counter.
    res.status(200).send(counter++);
});

// Start the web server on port 8000. Don't change this number, since it's used by Cratecode to let you access the server.
app.listen(8000);