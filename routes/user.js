import express from "express";
import { getAllUsers, getUserDetails, register, special } from "../controllers/user.js";

const router = express.Router();

//get all users
router.get("/all", getAllUsers)

 //create user
 router.post("/new", register);

//get user specila method

router.get("/userid/special", special)

//get user by id
router.get("/userid/:id", getUserDetails);


export default router;