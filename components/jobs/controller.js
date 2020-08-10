const store = require("./store");

function listJobs() {
  return store.list();
}

function getJob(job_id) {
  return store.get(job_id);
}

function getJobByLocation(location) {
  return store.filterByLocation(location);
}

module.exports = {
  list: listJobs,
  get: getJob,
  getJobByLocation: getJobByLocation,
};
