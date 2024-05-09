import express from "express"
import { login, logout, register } from "../controllers/auth.controller.js";


// ___________________________SIMPLIFY THE LOGIC BY TAKING IT TO THE CONTROLLER FOLDER_______________________________________________________
const router=express.Router();

router.post("/register", register);
router.post("/login", login)
router.post("/logout", logout)


// _____________________________________________________

export default router