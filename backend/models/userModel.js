const mongoose=require('mongoose')
const userModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const user=mongoose.model('user',userModel)
module.exports=user;