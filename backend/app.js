const express = require('express');
const app = express();

//Config
const connectDatabase = require('./db/Database');
connectDatabase();

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

app.use(ErrorHandler)

module.exports=app;
