const mongoose = require("mongoose");

var addplotModel = new mongoose.Schema(
    {
        id:{
            type:String
        },
        plotlength:{
            type:String
        },
        plotbreadth:{
            type:String
        },
        status: {
            type:String
        },
        location:{
            type: String
        },
        plotsize: {
            type:String
        },
        amount:{
            type:Number
        },
        percentage:{
            type:Number
        },
        names:[{
            type:String
        }]
    },
    {
        timestamps:true
    })

module.exports = mongoose.model("Addplot", addplotModel);