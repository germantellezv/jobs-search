const store = require("./store");

function listJobs() {
  return store.list();
}

function getJob(job_id) {
  return store.get(job_id);
}

function getSome(amount) {
  return store.getSome(amount)
}

module.exports = {
  list: listJobs,
  get: getJob,
  getSome:getSome,
};
