const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Id: Number,
  "Job Title": String,
  "Salary Estimate": String,
  "MAX Salary Estimate": String,
  "MIN Salary Estimate": String,
  "Job Description": String,
  Rating: Number,
  "Company Name": String,
  Location: String,
  Headquarters: String,
  Size: String,
  Founded: Number,
  "Type of ownership": String,
  Industry: String,
  Sector: String,
  Revenue: String,
  Competitors: String,
  "Easy Apply": String,
  Profile: String,
  Skills: String,
  images: String,
})


const Model = mongoose.model("Job", mySchema)

module.exports = {
  Model,
}