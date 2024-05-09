// logic to register user

export const register=(req, res)=>{

    // const {username, email}=req.body
    console.log(req.body);
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