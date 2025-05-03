import { Router } from "express";
import { checkAdmin, checkToken } from "../middleware/auth.middleware";
import { deleteUserByIdApi, getAllUserApi, updateUserByIdApi } from "../controller/user.controller";
const router=Router()
router.get('/',checkAdmin,getAllUserApi)
router.put('/',checkToken,updateUserByIdApi)
router.delete('/',checkToken,deleteUserByIdApi)
export default router