import express from "express";
import {
  registerController,
  loginController,
  AllUsersCount,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//FETCHING ALL USERS COUNT || POST
router.get("/user-count", AllUsersCount);

//Forgot Password || POST
// router.post("/reset-password", resetPasswordController);

export default router;
