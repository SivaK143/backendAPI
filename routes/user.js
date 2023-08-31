import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


 //create user
 router.post("/new", register);

 //login
 router.post("/login", login);

 //logout
 router.get("/logout", logout );

//get user by id
router.get("/me",isAuthenticated, getMyProfile);


export default router;