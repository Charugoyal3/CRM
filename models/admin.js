const mongoose = require("mongoose");

var adminloginModel = new mongoose.Schema({
 email:String,
 password:String

})

module.exports = mongoose.model("AdminLogin", adminloginModel);