const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

console.log("PATH: ", path.join(__dirname, "resources/views"));

app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(port, () => console.log(`app listen at http://localhost:${port}`));
