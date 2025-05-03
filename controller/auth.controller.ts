import { NextFunction, Request, Response } from "express";

import { createUser, useGetUserByEmail } from "../service/user.service"
import { Secret } from "jsonwebtoken";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {sendEmail} from "../utils/mailer"
export const register=async (req:Request,res:Response,next:NextFunction)=>{
    try {
       
        const userData=req.body
        const newUser=await createUser(userData)
        const token=jwt.sign({id:newUser.id,role:newUser.role},process.env.JWT_SECRET as Secret,{
            expiresIn:"1d"
        })
        
        await sendEmail({
            to:newUser.email,
            subject:"Welcome",
            templatePath:"registerSuccess",
            data:{
                name:userData.firstName+userData.lastName,
                year:new Date().getUTCFullYear()
            }

        })
        res.status(200).json({
            message:"User created successfully",
            user:newUser,
            token:token
        })
    } catch (error) {
       next(error)
    }
} 


export const login=async (req:Request,res:Response,next:NextFunction)=>{
    try {
       
        const userData=req.body
        const user=await useGetUserByEmail(userData.email)
        if(user!=null){
            const isMatch=bcrypt.compareSync(userData.password,user.password)
            if(isMatch){
                const token=jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET as Secret)
                res.status(200).json({
                    message:"Logged in successfully",
                    user:user,
                    token:token
                })
            }
            else{
               res.status(403).json({
                message:"Invalid Credentials"
               }) 
            }
        }
        else{
            res.status(403).json({
             message:"Invalid Credentials"
            }) 
         }
       
    } catch (error) {
       next(error)
    }
} 