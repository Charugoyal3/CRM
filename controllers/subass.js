const Subass = require("../models/subass.js");
const Registration = require("../models/registration.js");


const getsubass = async (req, res) => {
    const subass = await Subass.findById(req.params.subassId);
    if (subass) res.status(200).render('index', {
        subass: subass
    });
    return "subass not found!";
}

const getsubassform = async (req, res) => {
  
    const reg = await Registration.findById(req.params.registrationId);
    if (reg) res.status(200).render('subass', {
        reg:reg
    });
    return "ID not Found";
};
//admin1--5 --a2, a2 -- 4-- s1, s1- 3 --s2//plot p1

const postsubass = async (req, res) => {
     var subass = new Subass(req.body);
     subass.assid=req.params.registrationId;
     const ass = await Registration.find({});
     const subasso = await Subass.find({});

    // console.log(ass.length);
    subass.userid="jyo_0"-ass.length+subasso.length;
    
    
    try {
        const registration = await Registration.findById(req.params.registrationId);
        if (registration != null) {
            if (subass) {
                const newsubass = new Subass(subass);
                const savedsubass = await newsubass.save();
                registration.subass.unshift(savedsubass);
                registration.save();
                res.redirect("/");

            } else {
                res.send("subass not added");
            }
        }
        res.send("Invalid registration id");
    } catch (err) {
        return err;
    }
};




exports.getsubassform = getsubassform;
exports.getsubass = getsubass;
exports.postsubass = postsubass;