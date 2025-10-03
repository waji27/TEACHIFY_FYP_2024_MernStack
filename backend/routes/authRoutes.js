import express from "express";
import {
  registerController,
  loginController,
  AllUsersCount,
  creditTokensController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//FETCHING ALL USERS COUNT || POST
router.get("/user-count", AllUsersCount);

// CREDIT TOKENS || POST
router.post("/credit-tokens", requireSignIn, creditTokensController);

//Forgot Password || POST
// router.post("/reset-password", resetPasswordController);

export default router;
