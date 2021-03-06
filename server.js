const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const router = require("./network/routes");
const db = require("./db");

var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// DB
const url_db =
  "mongodb+srv://db_user_germantellezv:j0U8PJgdXILb@cluster0.l7nqi.mongodb.net/jobs_db?retryWrites=true&w=majority";
db(url_db);

router(app);

// Handlebars
app.set("view engine", "hbs");

// Static files
app.use("/", express.static("public"));

// Run server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`La aplicación está escuchando en el puerto ${port}`);
