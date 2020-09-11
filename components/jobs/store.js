const { Model } = require("./model");

function listUsers() {
  // Model.find devuelve una promesa
  return Model.find();
}

async function getJob(job_id) {
  let filter = {
    // ID: job_id,
    'Id': job_id,
  };
  let result = await Model.find(filter).exec();

  return result;
}

async function getSome(amount) { 
  let result = await Model.find().sort().limit(parseInt(amount))
  return result
}

module.exports = {
  list: listUsers,
  get: getJob,
  getSome: getSome,
};
