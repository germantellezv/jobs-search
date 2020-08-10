const db = require("mongoose");

db.Promise = global.Promise;

async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
console.log("[db] Conectada con éxito.");
module.exports = connect;

// Use this mongoimport template to import json to MongoDB Atlas
/* mongoimport --host cluster0-shard-00-02.l7nqi.mongodb.net:27017 --db jobs_db --type json --file ./jobs.json --jsonArray --authenticationDatabase admin --ssl --username db_user_germantellezv --password j0U8PJgdXILb --verbose */