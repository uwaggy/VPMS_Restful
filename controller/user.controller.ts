import { NextFunction, Request, Response } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../service/user.service";
import jwt, { Secret } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const getAllUserApi=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const users=await getAllUsers()
        res.status(200).json({
            message:"User Fetched successfully",
            users:users
        })
    } catch (error) {
       next(error)
    }
}



export const getUserByIdApi=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id;
        const user=await getUserById(id)
         res.status(200).json({
            message:"User retrieved",
            user:user
        })
        
    } catch (error) {
        next(error)
    }
}

export const deleteUserByIdApi=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id;

        await deleteUser(id)
         res.status(200).json({
            message:"User Deleted successfully",
            
        })
        
    } catch (error) {
        next(error)
    }
}

export const updateUserByIdApi=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id;
        const userData=req.body

     const updatedUser =await updateUser(id,userData)
        
      res.status(200).json({
            message:"User Updated successfully",
            user:updatedUser
            
        })
        
    } catch (error) {
        next(error)
    }
}
export const authenticate=async (req:Request,res:Response,next:NextFunction)=>{
    try {
    //@ts-ignore
      const user=req.user;
      res.status(200).json({
        user
      })
        
    } catch (error) {
        next(error)
    }
}

