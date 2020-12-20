const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://charu:Myheaven3@cluster0.n1byn.mongodb.net/crm?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(err);
        else console.log("Database connected");
    }
);