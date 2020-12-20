const mongoose = require("mongoose");

var plotallotModel = new mongoose.Schema(
    {
        id:{
            type:String
        },
        plotsize:{
            type:String
        },
        amount:{
            type:Number
        },
        percentage:{
            type:Number
        },
        name:{
            type:String
        }
    },
    {
        timestamps:true
    })

module.exports = mongoose.model("Plotallot", plotallotModel);