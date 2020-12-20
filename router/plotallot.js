var express = require("express");
var router = express.Router({ mergeParams: true });

const {
    getplotallot,
    postplotallot,

} = require("../controllers/plotallot.js");


router.get("/plotallot", getplotallot);
router.post("/plotallot", postplotallot);


module.exports = router;