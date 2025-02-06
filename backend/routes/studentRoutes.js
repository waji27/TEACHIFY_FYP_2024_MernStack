import express from "express";
import {
  getAllStudentsController,
  //   registerController,
} from "../controllers/studentController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
// router.post("/add-new-teacher", registerController);

//GET ALL TEACHERS || METHOD POST
router.post("/get-all-students", getAllStudentsController);

export default router;
