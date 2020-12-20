var express = require("express");
var router = express.Router();

const {
    getaddplot,
    getplotstruct,
    postaddplot,
    updateplotstruct,
    updatepostplotstruct,
    getplotallot,
    postplotallot,
    getplotallotstruct

   
} = require("../controllers/addplot.js");


router.get("/addplot", getaddplot);
router.post("/addplot", postaddplot);
router.get("/plot",getplotstruct);
router.get("/plot/:plotId/update", updateplotstruct);
router.post("/plot/:plotId/update", updatepostplotstruct);
router.get("/plotallot", getplotallot);
router.post("/plotallot", postplotallot);
router.get("/plotallotstruct", getplotallotstruct);


module.exports = router;