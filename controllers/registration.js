const Registration = require("../models/registration.js");




const getRegistration = function (req, res) {
    res.render("registration");
};

const postRegistration = async (req, res) => {
    var data = new Registration(req.body);
   try{
       const item= await data.save();
       res.redirect("index");
   }
    catch(err){
        res.status(400).send("Unable to save to database");
    };

};

exports.getRegistration = getRegistration;
exports.postRegistration = postRegistration;
