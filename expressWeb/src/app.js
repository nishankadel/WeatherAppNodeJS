// import essentials
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 5000; // if it is hosted, gets its own port or in 8000
const hostname = "127.0.0.1";

// public static paths
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));

// handle bars
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// working with pages | routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    content: "Enter Perfect URLS, OKay !",
  });
});

// listening to server
app.listen(port, hostname, () => {
  console.log(`Go To http://${hostname}:${port}/`);
});
