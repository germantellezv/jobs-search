const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Id: Number,
  JobTitle: String,
  SalaryEstimate: String,
  MaxSalaryEstimate: String,
  MinSalaryEstimate: String,
  JobDescription: String,
  Rating: Number,
  CompanyName: String,
  Location: String,
  Headquarters: String,
  Size: String,
  Founded: Number,
  TypeOfOwnership: String,
  Industry: String,
  Sector: String,
  Revenue: String,
  Competitors: String,
  EasyApply: String,
  Profile: String,
  Skills: String,
  Images: String,
  Time: String,
  Benefitis: String,
  Responsibilities: String,
  Qualifications: String,
})


const Model = mongoose.model("Job", mySchema)

module.exports = {
  Model,
}