import Express from "express"
import prismaClient from "./prisma/prisma-client"
import {errorHandler} from "./middleware/errorHandler"
import authRoute from "./routes/auth.route"
import userRoute from "./routes/user.route"
import dotenv from "dotenv"
dotenv.config()
const app=Express()
app.use(Express.json())
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/user",userRoute)

app.use(errorHandler)


app.listen(5000,()=>{
    prismaClient.$connect().then((
    )=>{
        console.log("Application started successfully")
    }).catch((err)=>{
        console.log(err)
    })
   
})