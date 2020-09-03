const jobs = require("../components/jobs/network");
const home = require("../components/home/network");

const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('../swagger.json')

const routes = function (app) {
  app.use("/", home);
  app.use("/jobs", jobs);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
};

module.exports = routes;
