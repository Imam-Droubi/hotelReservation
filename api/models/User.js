import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName:{
      type : String,
      required : true,
    },
    userName:{
      type : String,
      required : true,
      unique : true,
    },
    email:{
      type : String,
      required : true,
      unique : true,
    },
    phoneNumber:{
      type : String,
      required : true,
    },
    password:{
      type : String,
      required : true,
    },
    country:{
      type : String,
      required : true,
    },
    address:{
      type : String,
      required : true,
    },
    isAdmin : {
      type : Boolean,
      default : false,
    }
  },
  {timestamps : true},
);

export default mongoose.model("User" , UserSchema);