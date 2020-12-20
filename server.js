const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.port || 5000;

require("./database/index.js");

const RegistrationRouter = require("./router/registration");
const adminRouter = require("./router/admin");
const subassRouter = require("./router/subass");
const addplotRouter = require("./router/addplot");
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(express.favicon());
app.set("view engine", "ejs");

app.use("/", RegistrationRouter);
app.use("/",addplotRouter);
app.use("/",adminRouter);
app.use("/",subassRouter);


app.get("/", (req, res) => {
    res.render("adminlogin");
});

app.listen(PORT, () => {
    console.log("App started at: " + PORT);
});