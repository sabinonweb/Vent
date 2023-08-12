const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.set('views', 'views') : specify where to look

app.listen("3000");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/create/blog", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("about");
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Dumbo" });
});