/* En este archivo estan las rutas de este componente */
const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");


// ROUTES
router.get("/", listJobs);
router.get("/:id", getJob);
router.get("/filter/location/:location", filterByLocation);

function filterByLocation(req, res) {
  console.log(req.params.locations);
  controller.getJobByLocation()
  .then(job => {
    response.success(req, res, job, 200)
  })
  .catch(err => {
    response.error(req, res, "Error inesperado", 400)
  })
}

function getJob(req, res) {
  controller.get(req.params.id)
  .then(job => {
    response.success(req, res, job, 200)
  })
  .catch(err => {
    response.error(req, res, "Error inesperado", 400)
  })
}

function listJobs(req, res) {
  controller.list()
  .then(list => {
    response.success(req, res, list, 200)
  })
  .catch(err => {
    response.error(req, res, "Error inesperado", 400)
  })
}

module.exports = router;
