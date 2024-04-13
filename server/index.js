const express  = require('express');
const { chats } = require('./Data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hii")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.listen(PORT,console.log("listening"));