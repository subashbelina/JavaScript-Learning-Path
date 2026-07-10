/*
  Express Setup
  -------------
  Three steps: require express, create app, listen on a port.
*/

console.log("--- Express Setup ---");

// Real Express code (after npm install express):
// const express = require("express");
// const app = express();
// app.listen(3000, () => console.log("Server on http://localhost:3000"));

const app = {
  listen(port, callback) {
    console.log("Port:", port);
    callback();
  },
};

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
