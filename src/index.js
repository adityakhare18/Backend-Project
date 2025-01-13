import dotenv from "dotenv";
dotenv.config({
  path:'./env'
});
import connectDB from "./db/db.js";
connectDB();



























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