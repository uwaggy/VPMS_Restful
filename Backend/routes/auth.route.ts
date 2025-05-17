// routes/auth.route.ts
import { Router } from "express";
import { login, register } from "../controller/auth.controller";
import { checkToken } from "../middleware/auth.middleware";
import { authenticate } from "../controller/user.controller";


const router = Router();

router.post("/login", checkToken, login);
router.post("/register", register);
// Now uses Authorization header, not req.headers.token
router.get("/", checkToken, authenticate);

export default router;
