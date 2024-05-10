// logic to register user
import bcrypt from "bcryptjs"
export const register=async(req, res)=>{

    // const {username, email}=req.body
    console.log(req.body);

    // get password and hash them
    const {username,email, password}=req.body
    const hashedPassword=await bcrypt.hash(password, 10)
    console.log({username,email, password:hashedPassword });
console.log("register user");
res.send("hello register page")

}


// logic to login user

export const login=(req, res)=>{
    console.log("login user");
}


// logic to logout user

export const logout=(req, res)=>{
    console.log("Logout user");
}