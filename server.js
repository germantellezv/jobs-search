const express = require("express");
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");

var app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const url_db = "mongodb+srv://db_user_germantellezv:j0U8PJgdXILb@cluster0.l7nqi.mongodb.net/jobs_db?retryWrites=true&w=majority";

db(url_db);

router(app);

app.use("/", express.static("public"));

app.listen(3003);
console.log("La aplicación está escuchando en el puerto 3003");
