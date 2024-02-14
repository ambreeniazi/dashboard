const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json())
// cors
const cors = require("cors");
app.use(cors());

// import user model 
const user = require("./models/userModel")

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected successfully")
    app.listen(process.env.PORT,()=>console.log(`server is listening ${process.env.PORT}`))
}).catch((error)=>{
    console.log("error", error)
})
// add users
// const user = require('../backend/models/userModel')
// const mongoose = require("mongoose");
// require('dotenv').config()
// // add moongoose
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         app.listen(process.env.PORT,()=>console.log(`Server is listening port ${process.env.PORT}`))
//     }).catch((err)=>console.log(err))

    app.post('/signup', async (req ,res)=>{
        const User = new user(req.body);        
        const result = await User.save();
        return res.status(200).send(result);
    })
    