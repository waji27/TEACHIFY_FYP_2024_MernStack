import express from "express";
import {
  AllTeachersCount,
  getAllTeacherController,
  registerController,
  UpdateTeacher,
  ApplyToPostAndDeductTokens,
} from "../controllers/teacherController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-new-teacher", upload.single('profilePicture'), registerController);

//GET ALL TEACHERS || METHOD POST
router.get("/get-all-teachers", getAllTeacherController);

//GET ALL TEACHERS Count || METHOD POST
router.get("/teacher-count", AllTeachersCount);

//PUT TEACHER Profile Update || METHOD POST
router.put("/teacher-profile-update", requireSignIn, UpdateTeacher);

// APPLY TO POST AND DEDUCT TOKENS || METHOD POST
router.post(
  "/apply-to-post",
  requireSignIn,
  ApplyToPostAndDeductTokens
);

export default router;
