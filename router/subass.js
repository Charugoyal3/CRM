var express = require("express");
var router = express.Router({ mergeParams: true });

const {
    getsubassform,
    getsubass,
    postsubass,
  
  
} = require("../controllers/subass.js");


router.get("/:registrationId", getsubassform);

router.post("/:registrationId/subass", postsubass);

router.get("/:registrationId/:subassId", getsubass);



module.exports = router;