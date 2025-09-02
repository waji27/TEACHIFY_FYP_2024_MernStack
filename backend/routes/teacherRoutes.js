import express from "express";
import {
  AllTeachersCount,
  getAllTeacherController,
  registerController,
  UpdateTeacher,
} from "../controllers/teacherController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-new-teacher", registerController);

//GET ALL TEACHERS || METHOD POST
router.get("/get-all-teachers", getAllTeacherController);

//GET ALL TEACHERS Count || METHOD POST
router.get("/teacher-count", AllTeachersCount);

//PUT TEACHER Profile Update || METHOD POST
router.put("/teacher-profile-update", requireSignIn, UpdateTeacher);

export default router;
