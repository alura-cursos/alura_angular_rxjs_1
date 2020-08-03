const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  db = require("./database"),
  { acoesRoutes, portfolioRoutes, userRoutes } = require("../app/routes");

app.set("secret", "your secret phrase here");

const corsOptions = {
  exposedHeaders: ["x-access-token"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use((req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log("####################################");
  if (token) {
    console.log("A token is send by the application");
    console.log("Token value is " + token);
  } else {
    console.log("No token is send by the the application");
  }
  console.log("####################################");
  next();
});

acoesRoutes(app);
portfolioRoutes(app);
userRoutes(app);

app.use("*", (req, res) => {
  res
    .status(404)
    .json({ message: `route ${req.originalUrl} does not exists!` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
