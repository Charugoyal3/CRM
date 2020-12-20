const mongoose = require("mongoose");

var subassModel = new mongoose.Schema(
    {
        userid:{
            type:String
        },
        assid:{
            type:String,
        },

        email: {
            type:String
        },
        pass: {
            type:String
        },
        cpass: {
            type:String
        },

        name:{
            type:String
        },
        father:{
            type:String
        },
        mother:{
            type:String
        },
        matrial:{
            type:String
        },
        mobile:{
            type:Number
        },
        birthday:{
            type:String
        },
        current: {
            type:String
        },
        permanent:{
            type:String
        },

        nomname:{
            type:String
        },
        nomfather:{
            type:String
        },
        nommother:{
            type:String
        },
        nommobile:{
            type:String
        },
        nombirthday:{
            type:String
        },
        nomaadhar:{
            type:Number
        },
        nompan:{
            type:String
        },
        
        aadhar:{
            type:Number
        },
        pan:{
            type:Number
        },
        bank:{
            type:String
        },
        branch:{
            type:String
        },
        accountholder:{
            type:String
        },
        account:{
            type:String
        },
        IFSC:{
            type:String
        },

        Designation:{
            type:String
        },
        percentage:{
            type:Number
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Subassociates", subassModel);