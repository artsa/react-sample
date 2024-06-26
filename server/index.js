// server/index.js

const express = require("express");

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

const now = new Date();

//creates an endpoint for the route /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from ExpressJS - " + new Date().toISOString() });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
