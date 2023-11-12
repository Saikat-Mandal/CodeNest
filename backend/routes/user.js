const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const UserModel = require("../models/User.js")
const jwt = require("jsonwebtoken")


// register function 
router.post("/register",async (req,res)=>{
    const {email , password} = req.body

    const user = await UserModel.findOne({ email: email });

    if(user){
        return res.status(400).json({message : "User already exists"})
    }

    const newUser =new UserModel({
        email : email,
        password : password
    })
    await newUser.save()

    return res.status(200).json({message : "User successfully registered"})
})


// login function 
router.post("/login" , async(req,res)=>{
    const {email , password } = req.body
    const user = await UserModel.findOne({email : email})
    if(!user){
        return res.status(400).json({message : "User does not exists"})
    }
    if(password != user.password){
        return res.status(400).json({message : "Passwords do not match"})
    }

    const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)
    res.cookie( "jwt" ,token, {
        maxAge : 24 * 60 * 60 * 1000,
        httpOnly:true,
        withCredentials: true,
    })
    res.status(200).json({message : "Successfully logged in !" , token , id:user._id})
})


//logout function 
router.get("/logout" , async(req,res)=>{
    res.cookie("jwt" , "" , {
        maxAge : 1,
        httpOnly: true
    })
    res.status(200).json({message : "successfully logged out"})
} )

module.exports = router