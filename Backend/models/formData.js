
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name:String,                
  phoneno:String,
  date:String,
  time:String,
  address:String,
  vehicle:String,
  subPlan : String,
  useremail: String
  
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;