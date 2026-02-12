import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateAccountDetails,
  changeCurrentPassword,
  refreshAccessToken,
  getCurrentUser,
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middlewares.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").post(verifyJWT, updateAccountDetails);

export default router;
