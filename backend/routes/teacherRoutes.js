import express from "express";
import {
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
export default router;
