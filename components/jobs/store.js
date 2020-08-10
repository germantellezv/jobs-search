const { Model } = require("./model");

function listUsers() {
  // Model.find devuelve una promesa
  return Model.find();
}

async function getJob(job_id) {
  let filter = {
    ID: job_id,
  };
  let result = await Model.find(filter).exec();
  return result;
}

function filterByLocation(location) {
  let filter = {
    location: location,
  };
  return Model.find(filter).exec();
}

module.exports = {
  list: listUsers,
  get: getJob,
  filterByLocation: filterByLocation,
};
