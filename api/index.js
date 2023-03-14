import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import { verifyAdmin, verifyToken, verifyUser } from "./utils/verify.js";
const app = express();
dotenv.config(); 

// CONNECTING TO MONGO DB
const connect = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (err) {
    throw err ;
  }
}
mongoose.connection.on("disconnected" , ()=>{
  console.log("MongoDB Disconnected");
})



// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth" , authRoute);
app.use("/api/hotels" , hotelsRoute);
app.use("/api/users" , usersRoute);
app.use("/api/rooms" , roomsRoute);


// ERROR HANDLING 
app.use((err,req,res,next)=>{
  res.status(err.status || 500).json({
    "success" : false,
    "status" : err.status || 500,
    "message" : err.message || "Something Went Wrong!",
    "stack" : err.stack
  });
});




app.listen(4000, ()=>{
  connect();
  console.log("Connected to Backend!")
})