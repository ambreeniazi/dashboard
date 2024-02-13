const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
// add moongoose
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        app.listen(process.env.PORT,()=>console.log(`Server is listening port ${process.env.PORT}`))
    }).catch((err)=>console.log(err))
    