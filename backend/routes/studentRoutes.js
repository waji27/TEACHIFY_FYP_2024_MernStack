import express from "express";
import {
  AllStudentsCount,
  getAllStudentsController,
  registerController,
} from "../controllers/studentController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-new-student", registerController);

//GET ALL TEACHERS || METHOD POST
router.post("/get-all-students", getAllStudentsController);

//GET ALL Students Count || METHOD POST
router.get("/student-count", AllStudentsCount);

export default router;
