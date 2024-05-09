import express from "express"
import { post } from "../controllers/post.controller.js"

const router=express.Router()

router.get("/post", post)


export default router