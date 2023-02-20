import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller.js";

const router = Router()

router.post('/new', authCtrl.createNewUser)
router.post('/login', authCtrl.loginUser)


export default router;