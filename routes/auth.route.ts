import { Router } from "express";
import { login, register } from "../controller/auth.controller";
import { checkToken } from "../middleware/auth.middleware";
import { authenticate } from "../controller/user.controller";
const router=Router()
router.post('/login',login)
router.post('/register',register)
router.get("/",checkToken,authenticate)
export default router