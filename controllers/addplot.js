const Addplot = require("../models/addplot.js");
const plotallot = require("../models/plotallot.js");
const plotallotsub = require("../models/plotallotsub.js");
const Registration = require("../models/registration.js");

const getaddplot = async (req, res) => {
    const ass = await Registration.find({});
    // console.log(ass);
    if (ass) res.status(200).render('addplot', {
      
        ass:ass,
    });
    return "Plot not found!";
    
};

const postaddplot = async (req, res) => {
    var data = new Addplot(req.body);
  
   try{
       const item= await data.save();
       res.redirect("/plot");
   }
    catch(err){
        res.status(400).send("Unable to save to database");
    };

};
const getplotallot = async (req, res) => {
    const ass = await Registration.find({});
    const plot = await Addplot.find({});
    // console.log(plot);
    if (ass,plot) res.status(200).render('plotallot', {
      
        ass:ass,
        plot:plot
    });
    return "Plot not found!";
    
};

const postplotallot = async (req, res) => {
    var data = new plotallot(req.body);
  
   try{
       const item= await data.save();
       res.redirect("plotallotstruct");
   }
    catch(err){
        res.status(400).send("Unable to save to database");
    };

};
const getplotallotstruct = async (req, res) => {
    const ass = await Registration.find({});
    const plot = await plotallot.find({});
    const plotsub = await plotallotsub.find({});
    // console.log(plotsub);
    if (ass,plot,plotsub) res.status(200).render('plotallotstruct', {
      
        ass:ass,
        plot:plot,
        plotsub:plotsub,
    });
    return "Plot not found!";
    
};
const getplotstruct = async (req,res) => {
    const plot = await Addplot.find({});
    // console.log(plot.length);
    if (plot) res.status(200).render('plotstruct', {
        plot:plot,
        size:plot.length,
        
    });
    return "Plot not found!";
}
const updateplotstruct = async(req, res) => {
    const upplot = await Addplot.findOne({
        _id: req.params.plotId
    });
    console.log(upplot._id);
    if (upplot) res.status(200).render('updateplot', {
        upplot:upplot,
        
    });
    return "Plot not found!";
}
const updatepostplotstruct = (req, res) => {
    Addplot.findOne({
        _id: req.params.plotId
    }, async (err, doc) => {
        if (err && !doc) {
            return res.send(500, {
                error: err
            });
        } else {
            doc.id=req.body.id,
            doc.plotbreadth = req.body.plotbreadth;
            doc.plotlength = req.body.plotlength;
            doc.plotsize = req.body.plotsize;
            doc.status = req.body.status;
            doc.location = req.body.location;
            await doc.save();
            return res.status(302).redirect("/plot");
        }
    });
}

// const deleteplotstruct = (req, res) => {
//     Addplot.findByIdAndRemove({
//         _id: req.params.plotId
//     }, (err, doc) => {
//         if (err && !doc) return res.status(500).send(err);
//         return res.status(200).redirect("/plot")
//     })

// }

exports.getaddplot = getaddplot;
exports.postaddplot = postaddplot;
exports.getplotallot = getplotallot;
exports.postplotallot = postplotallot;
exports.getplotallotstruct = getplotallotstruct;
exports.getplotstruct = getplotstruct;
exports.updateplotstruct = updateplotstruct;
exports.updatepostplotstruct = updatepostplotstruct;
