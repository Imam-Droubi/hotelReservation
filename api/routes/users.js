import express from "express";
import {verifyAdmin, verifyUser} from "../utils/verify.js";
const router =express.Router();
import {updateUser ,deleteUser , getUser, getAllUsers} from "../controllers/userControllers.js"


// UPDATE USER 
router.put("/:id" , verifyUser ,updateUser);

// DELETE USER
router.delete("/:id" ,verifyUser,deleteUser);

// GET A USER 
router.get("/:id" ,verifyUser,getUser);

// GET ALL USERS 
router.get("/" ,verifyAdmin ,getAllUsers);

export default router;