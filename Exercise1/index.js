const express = require("express");
const app = express();
const port = 3000;
const app2 = express();
const port2 = 3001;

app.get("/", (req, res) => {
  res.send("Landing page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app2.get("/", (req, res) => {
  res.send("App2, Landing page");
});

app2.get("/about", (req, res) => {
  res.send("App2, About page");
});

app2.get("/contact", (req, res) => {
  res.send("App2, Contact page");
});

app.listen(port, () => {
  console.log(`Port listening at http:localhost:${port}`);
});

app2.listen(port2, () => {
  console.log(`Port2 listening at http:localhost:${port2}`);
});
