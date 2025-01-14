import dotenv from "dotenv";
dotenv.config({
  path:'./env'
});
import connectDB from "./db/db.js";
import { app } from "./app.js";
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log("Server started at port ",process.env.PORT);
  })
})
.catch((err)=>{console.log("MongoDB connection failed !!",err)})


























/*
import express from "express";
const app = express();

(async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error",(error)=>{
        console.log("Error in connection",error);
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log("Server started at port ",process.env.PORT);
      })
      console.log("Database connected");
    } catch (error) {
      console.log("Error: ", error);
      throw err
    }
})()

*/