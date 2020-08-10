/* En este archivo estan las rutas de este componente */
const express = require("express");
const router = express.Router();
const response = require("../../network/response");
// const controller = require("./controller");


// ROUTES
router.get("/", homePage);


function homePage(req, res) {
  res.render("home",{
    name: "FOCUS"
  })
}

module.exports = router;
