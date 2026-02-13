import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateAccountDetails,
  refreshAccessToken,
  verifyEmail,
  resendEmailVerification,
  forgotPasswordRequest,
  resetForgotPassword,
  changeCurrentPassword,
} from "../controllers/user.controller.js";
import { validator } from "../middlewares/validator.middleware.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  userRegisterValidator,
  userLoginValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
  userChangePasswordValidator,
} from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validator, registerUser);
router.route("/login").post(userLoginValidator(), validator, loginUser);
router.route("/verify-email/:verificationToken").get(verifyEmail)
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator(), validator, forgotPasswordRequest)
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(), validator, resetForgotPassword);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, userChangePasswordValidator(), validator, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").post(verifyJWT, updateAccountDetails);
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification)

export default router;