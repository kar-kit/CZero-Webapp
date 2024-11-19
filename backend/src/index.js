const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/testMessage", (req, res) => {
  console.log("Request Received");
  res.send("Hello Team 46!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
