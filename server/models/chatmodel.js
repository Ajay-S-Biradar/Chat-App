const mongoose = require('mongoose');

const chatModel = new mongoose.Schema(
    {
        isGroupChat: {type:Boolean,default:false},
        users:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
        ],
        chatName:{type:String,trim:true},
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    } ,
    {
        timestamps:true,
    }
)

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;