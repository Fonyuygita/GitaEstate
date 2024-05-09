import express from "express"
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js"
const app=express()
app.use(express.json())


// create first api end point
// app.use(express.json())
 
app.use("/api/auth", authRoute)
app.use("/api",postRoute)

// listen to a port 
app.listen(3000, ()=>{
    console.log("listening to app on port 3000");
})