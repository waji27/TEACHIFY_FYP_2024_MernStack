import express from "express";
import {
  AllTeachersCount,
  getAllTeacherController,
  registerController,
} from "../controllers/teacherController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-new-teacher", registerController);

//GET ALL TEACHERS || METHOD POST
router.get("/get-all-teachers", getAllTeacherController);

//GET ALL TEACHERS Count || METHOD POST
router.get("/teacher-count", AllTeachersCount);

export default router;
