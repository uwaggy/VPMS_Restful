import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken"
import { getUserById } from "../service/user.service";

interface JwtPayload {
    id: string;
    role:string
  }

export const checkToken=async (req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers.token;
    if(token){
        const decodedUser=jwt.verify(token as string,process.env.JWT_SECRET as Secret) as JwtPayload
        const user=await getUserById(decodedUser.id)
        if(user!=null){
            //@ts-ignore
            req.user=user;
            next()
        }
        else{
            res.status(403).json({
                message:"Invalid token"
            })
        }
    }
    else{
        res.status(403).json({
            message:"No Token provided"
        })
    }
   

}


export const checkAdmin=async (req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers.token;
    if(token){
        const decodedUser=jwt.verify(token as string,process.env.JWT_SECRET as Secret) as JwtPayload
        const user=await getUserById(decodedUser.id)
        if(user?.role=="ADMIN"){
            //@ts-ignore
            req.user=user;
            next()
        }
        else{
            res.status(403).json({
                message:"Unauthorized"
            })
        }
    }
    else{
        res.status(403).json({
            message:"No Token provided"
        })
    }
   

}
