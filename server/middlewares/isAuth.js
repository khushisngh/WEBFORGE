import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
const isAuth=async (req,res,next)=>{
try {
    const token=req.cookies.token
    //console.log("TOKEN:", token)
    if(!token){
        return res.status(400).json({message:"token not found"})
    }
    //maine edit kia
     const decoded=jwt.verify(token,process.env.JWT_SECRET)
     //console.log("decoded:", decoded)
     req.user=await User.findById(decoded.id)
     //console.log("req.user:",req.user)
     next()
} catch (error) {
    return res.status(500).json({message:"invalid token"})
}
}

export default isAuth
