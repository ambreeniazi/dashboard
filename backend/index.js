const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json())
// cors
const cors = require("cors");
app.use(cors());

// import user model 
const User = require("./models/userModel");
const product = require("./models/product")

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected successfully")
    app.listen(process.env.PORT || 8000,()=>console.log(`server is listening ${process.env.PORT ||  8000}`))
}).catch((error)=>{
    console.log("error", error)
})


app.post('/signup', async (req, res) => {
        const user = new User(req.body);
        const result = await user.save();
        // result = result.toObject()
        // delete result.password;
        return res.status(200).send(result);
    
});
    
    // login
    app.post('/login',async (req,res)=>{
    if(req.body.email && req.body.password)
    { const user =  await User.findOne(req.body).select("-password");
      if(user){
         res.send(user);
      }else{
        res.status(400).send({result:"Invalid result"});
      }}else{
        res.send({result:"User not Found"})
      } 
    })
    
    app.post('/add-product', async (req,res)=>{
      const prod=new product(req.body);
      const result = await  prod.save();
      res.send(result);
    })
  
    // add users
// const user = require('../backend/models/userModel')
// const mongoose = require("mongoose");
// require('dotenv').config()
// // add moongoose
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         app.listen(process.env.PORT,()=>console.log(`Server is listening port ${process.env.PORT}`))
//     }).catch((err)=>console.log(err))