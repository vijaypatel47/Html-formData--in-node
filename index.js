const express = require("express");

const app = express();

app.use(express.json());

const path = require("path");

const publicPath = path.join(__dirname, "public/about.html");

app.get("/", (req, res) => {
  res.sendFile(publicPath);
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "public/thanks.html"));
});

app.listen(3000, (req, res) => {
  console.log("Server Running on http://localhost:3000");
});
