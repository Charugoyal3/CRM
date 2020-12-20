const Registration = require("../models/registration.js");




const getRegistration = function (req, res) {
    res.render("registration");
};

const postRegistration = async (req, res) => {
    var data = new Registration(req.body);
    const ass = await Registration.find({});
    console.log(ass.length);
    data.userid="jyo000"+ass.length;
 
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
