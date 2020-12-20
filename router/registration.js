var express = require("express");
var router = express.Router({ mergeParams: true });

const {
    getRegistration,
    postRegistration,
   
} = require("../controllers/registration.js");


router.get("/register", getRegistration);
router.post("/register", postRegistration);


module.exports = router;