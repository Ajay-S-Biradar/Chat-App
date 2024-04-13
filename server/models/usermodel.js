const mongoose = require("mongoose");

const usermodel =new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        pic:{
            type:String,
            required:true,
            default:"https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
        }
    }
);

const User = mongoose.model("User",usermodel);

module.exports = User;