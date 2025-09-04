import express from "express";
import {
  AddNewPostController,
  AllStudentsCount,
  GetAllPostsbyUserController,
  GetAllPostsController,
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

//GET ALL Students Count || METHOD POST
router.get("/add-new-post", AddNewPostController);

//GET ALL Students Count || METHOD POST
router.get("/get-all-posts", GetAllPostsbyUserController);

//GET ALL Students Count || METHOD POST
router.get("/get-all-posts", GetAllPostsController);

export default router;
