import { Router } from "express";
import {getprofile, login, logout, register,} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", isLoggedIn, getprofile);

export default router;
