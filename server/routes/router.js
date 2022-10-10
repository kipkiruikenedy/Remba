const express = require("express");
const rootRouter = express.Router();

//controllers imports
const authController = require("../controllers/authController");
//define routes and corresponding controllers
rootRouter.get("/", (req, res) => {
  res.send("<h1>youve reached here</h1>");
});

rootRouter.post("/login", authController.login);

module.exports = rootRouter;
