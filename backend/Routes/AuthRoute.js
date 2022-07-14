import express from "express";
import { register, login } from "../Controllers/AuthController.js";
import { checkUser } from "../MiddleWares/AuthMidlleWare.js";
const router = express.Router();

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

export default router;
