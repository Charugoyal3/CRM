const Addplot = require("../models/addplot.js");
const Registration = require("../models/registration.js");

const getplotallot = async (req, res) => {
    const ass = await Registration.find({});
    // console.log(ass);
    if (ass) res.status(200).render('plotallot', {
      
        ass:ass,
    });
    return "Plot not found!";
    
};

const postplotallot = async (req, res) => {
    var data = new Addplot(req.body);
  
   try{
       const item= await data.save();
       res.redirect("/plot");
   }
    catch(err){
        res.status(400).send("Unable to save to database");
    };

};


exports.getplotallot = getplotallot;
exports.postplotallot = postplotallot;