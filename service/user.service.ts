import prismaClient from "../prisma/prisma-client";
import { UpdateDto, UserDto } from "../dto/user.dto";
import bcrypt from "bcrypt"


export const createUser=async (userData:UserDto)=>{
    const hashedPassword=bcrypt.hashSync(userData.password,10)
    try {
        const user=await prismaClient.user.create({
            data:{
              firstName:userData.firstName,
              lastName:userData.lastName,
              email:userData.email,
              role:userData.role,
              phoneNumber:userData.phoneNumber,
              password:hashedPassword

            }
        })
        return user
    } catch (error) {
       throw  error 
    }

}

export const updateUser=async (id:string,updateData:UpdateDto)=>{
try {
    const user=await prismaClient.user.findUnique({
        where:{
            id
        }
    })
    if(user){
        const updatedUser=await prismaClient.user.update({
            data:{
                ...updateData
            },
            where:{
                id:id
            }
        })
    }
    else{
        return
    }
    
    
    return updateUser
} catch (error) {
    throw error
}
}


export const deleteUser=async(id:string)=>{
    try {
        const user=await prismaClient.user.findUnique({
            where:{
                id
            }
        })
        if(user){
            await prismaClient.user.delete({
                where:{
                    id:id
                }
            })
            return 
        }
        else{
            return 
        }
     

    } catch (error) {
        throw error
    }
}

export const getAllUsers=async ()=>{
    try {
        const allUsers=await prismaClient.user.findMany()
        return allUsers
    } catch (error) {
        throw error
    }
}

export const getUserById=async (id:string|undefined)=>{
    try {
        const user=await prismaClient.user.findUnique({
            where:{
                id:id
            }
        })
        return user
    } catch (error) {
       throw error 
    }
}


export const useGetUserByEmail=async(email:string)=>{
    try {
        const user=await prismaClient.user.findUnique({
            where:{
            email:email
            }
        })
        return user;
    } catch (error) {
        throw error;
    }
}