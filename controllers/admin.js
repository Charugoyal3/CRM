
const Registration = require("../models/registration.js");
const Admin = require("../models/admin.js");
const Subass = require("../models/subass.js");
const Addplot = require("../models/addplot.js");

const getadmin= async (req,res) => {
    const ass = await Registration.find({});
    if (ass) res.status(200).render('index', {
        ass:ass
    });
    return "Admin not found!";
}
const getassadmin= async (req,res) => {
   try {
       const reg = await Registration.findById(
           req.params.registrationId
       ).populate("subass");
       if (reg) res.status(200).render('assindex', {
           reg:reg,
           subass: reg.subass
       });
 
   } catch (err) {
       res.send("No work found!" + err);
   };
 }
const getadminlogin= function(req,res){
    res.render("adminlogin");
}

// Single associates which which plot alloted
const getteamearning=async(req,res)=>{
    const reg = await Registration.findById(
        req.params.registrationId
    )
    const plot = await Addplot.find({name:reg.name});
    
    if (plot,reg) res.status(200).render('assearning', {
        plot:plot,
        size:plot.length,
        reg:reg
    });

    return "Admin not found!";
}



const postadminlogin = async (req,res,next) =>{
  Admin.findOne({ email:req.body.email},function(err,user){
            if(err){console.log('Error in signin'); return;}
            if(user){
                if(user.password!=req.body.pass){
                    return res.send("Pass incorrect");
                }
                //handle session creation
                return res.redirect("index");
    
            }
            else{
              Registration.findOne({ userid:req.body.email},function(err,user){
                //   console.log(req.body.userid);
                if(err){console.log('Error in signin'); return;}
                if(user){
                    if(user.pass!=req.body.pass){
                        return res.send("Pass incorrect");
                    }
                    return  res.redirect("index/"+user._id);
        
                }
                else{
                  Subass.findOne({ userid:req.body.email},function(err,user){
                    if(err){console.log('Error in signin'); return;}
                    if(user){
                        if(user.pass!=req.body.pass){
                            return res.send("Pass incorrect");
                        }
                        //handle session creation
                        return  res.render("subassindex");
            
                    }
                    else{
                        res.send("Not Found!!")
                    }
                });
                }
            });
            }
        });
}

//Form to allot plot to subbassociates
const getplotallotsub = async (req, res) => {
    const subass = await Subass.find({});
    const plot = await Addplot.find({});
    const reg = await Registration.findById(
        req.params.registrationId
    )
    if (reg,subass,plot) res.status(200).render('plotallotsub', {
      
        subass:subass,
        plot:plot,
        reg:reg
    });
    return "Plot not found!";
    
};

//Data save of form to allot plot to subassociates
const postplotallotsub = async (req, res) => {
    var data = new Addplot(req.body);
    const reg = await Registration.findById(
        req.params.registrationId
    )
   try{
       const item= await data.save();
       res.redirect("/index/"+reg._id+"/plotallotsubstruct");
   }
    catch(err){
        res.status(400).send("Unable to save to database");
    };

};

//Display of plot allotment to subassociates
const getplotallotsubstruct = async (req, res) => {
    const subass = await Subass.find({});
    const plot = await Addplot.find({});
    const reg = await Registration.findById(
        req.params.registrationId
    )
    if (reg,subass,plot) res.status(200).render('plotallotsubstruct', {
      
        subass:subass,
        plot:plot,
        reg:reg
    });
    return "Plot not found!";
    
};



exports.getadmin = getadmin;
exports.getassadmin = getassadmin;
exports.postadminlogin = postadminlogin;
exports.getadminlogin = getadminlogin;
exports.getteamearning = getteamearning;
exports.getplotallotsub = getplotallotsub;
exports.postplotallotsub = postplotallotsub;
exports.getplotallotsubstruct = getplotallotsubstruct;

