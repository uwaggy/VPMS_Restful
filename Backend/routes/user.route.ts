import { Router } from "express";
import { checkAdmin, checkToken } from "../middleware/auth.middleware";
import {createUserApi, deleteUserByIdApi, getAllUserApi, updateUserByIdApi } from "../controller/user.controller";
const router=Router()
router.post('/',createUserApi    )
router.get('/',checkAdmin,getAllUserApi)
router.put('/:id',checkToken,updateUserByIdApi)
router.delete('/',checkToken,deleteUserByIdApi)
export default router