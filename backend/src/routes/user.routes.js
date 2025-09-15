import { Router } from "express";
import { regitserUser } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(regitserUser);


export default router