const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "account.html"));
});

app.get("/publish", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "publish.html"));
});

app.get("/saved", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "saved.html"));
});

app.get("/recipe", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "recipe.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});