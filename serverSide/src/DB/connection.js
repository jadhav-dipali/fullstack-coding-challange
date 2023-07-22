const mongoose = require('mongoose');
const env = require("dotenv").config();
const URL = process.env.DATABASE_URL;

mongoose.connect(URL)
.then(()=>console.log("connection sucessfull"))
.catch(()=>console.log("not Connected"))