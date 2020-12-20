const Addplot = require("../models/addplot.js");
const Registration = require("../models/registration.js");

//Show form of new Plot
const getaddplot = async (req, res) => {
    const ass = await Registration.find({});
    if (ass) res.status(200).render('addplot', {
        ass:ass,
    });
    return "Plot not found!";
    
};

// Data save of new plot
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

//Form of associates plot allotment
const getplotallot = async (req, res) => {
    const ass = await Registration.find({});
    const plot = await Addplot.find({});
    if (ass,plot) res.status(200).render('plotallot', {
        ass:ass,
        plot:plot
    });
    return "Plot not found!";
    
};

//Data save of associated plot allotment
const postplotallot = async (req, res) => {
    var data = new Addplot(req.body);
   try{
       const item= await data.save();
       res.redirect("plotallotstruct");
   }
    catch(err){
        res.status(400).send("Unable to save to database");
    };

};

//Table Display of which plot are alloted to associates
const getplotallotstruct = async (req, res) => {
    const ass = await Registration.find({});
    console.log(ass.name[0]);
    const plot = await Addplot.find();
    // console.log(plot);
    if (ass,plot) res.status(200).render('plotallotstruct', {
        ass:ass,
        plot:plot,
       
    });
    return "Plot not found!";
    
};

//All plot description
const getplotstruct = async (req,res) => {
    const plot = await Addplot.find({});
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
    // console.log(upplot._id);
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



exports.getaddplot = getaddplot;
exports.postaddplot = postaddplot;
exports.getplotallot = getplotallot;
exports.postplotallot = postplotallot;
exports.getplotallotstruct = getplotallotstruct;
exports.getplotstruct = getplotstruct;
exports.updateplotstruct = updateplotstruct;
exports.updatepostplotstruct = updatepostplotstruct;
