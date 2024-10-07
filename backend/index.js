// const express = require('express');
// const dotenv = require('dotenv');
import express from "express"
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js" 
import mongoose from "mongoose";
import cors from "cors"
const app = express();

app.use(cors());

dotenv.config();
 
const PORT = process.env.PORT || 4000
const URL = process.env.MongoDBURL;

//Connect to MongoDB
try {
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
    
} catch (error) {
    console.log("Error: ", error );
    
}

//  Defining routes 
app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})