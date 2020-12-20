var express = require("express");
var router = express.Router();

const {
    getadmin,
    getassadmin,
    getadminlogin,
    postadminlogin,
    getteamearning,
    getplotallotsub,
    postplotallotsub,
    getplotallotsubstruct,
   
} = require("../controllers/admin.js");


router.get("/index", getadmin);
router.get("/index/:registrationId", getassadmin);
router.get("/", getadminlogin);
router.post("/", postadminlogin);
router.get("/index/:registrationId/team", getteamearning);
router.get("/index/:registrationId/plotallotsub", getplotallotsub);
router.post("/index/:registrationId/plotallotsub", postplotallotsub);
router.get("/index/:registrationId/plotallotsubstruct", getplotallotsubstruct);




module.exports = router;