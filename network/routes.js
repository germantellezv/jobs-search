const jobs = require("../components/jobs/network");
const home = require("../components/home/network");

const routes = function (app) {
  app.use("/", home);
  app.use("/jobs", jobs);
};

module.exports = routes;
