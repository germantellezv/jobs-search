const jobs = require('../components/jobs/network')

const routes = function (app) {
  app.use('/jobs', jobs)
}

module.exports = routes;