const mongoose = require("mongoose")


const userSchema =  new Mongoose.Schema({
    channelName:{
        type:String,
        required:true,
        },
    userName:{
        type:String,
        required:true,
        unique:true,

      },
      password:{
        type:String,
        required:true,
        },
        about:{
        type:String,
        required:true,
        },
        profilePic:{
        type:String,
        required:true,
        }

}, {timestamps:true})

const userModal = mongoose.model("user", userSchema); // create model based on the schema

export default userModal; // export model

