const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");





const app = express();



app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://Raman:sani123@cluster0.o7dew.mongodb.net/employes",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
        console.log("Database Connected");
    }).catch((e) => {
        console.log("database Not Connected",e);
    });




const empRoutes = require("./Routes/employes");



app.use(empRoutes);







app.listen(5000, function () {
    console.log("server started at port 5000");
})
