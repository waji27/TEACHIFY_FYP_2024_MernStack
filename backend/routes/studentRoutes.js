import express from "express";
import {
  AddNewPostController,
  AllStudentsCount,
  GetAllPostsbyUserController,
  GetAllPostsController,
  getAllStudentsController,
  registerController,
} from "../controllers/studentController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-new-student", upload.single('profilePicture'), registerController);

//GET ALL TEACHERS || METHOD POST
router.post("/get-all-students", getAllStudentsController);

//GET ALL Students Count || METHOD POST
router.get("/student-count", AllStudentsCount);

//GET ALL Students Count || METHOD POST
router.post("/add-new-post", AddNewPostController);

//GET ALL Students Count || METHOD POST
router.get("/get-all-posts-by-user", GetAllPostsbyUserController);

//GET ALL Students Count || METHOD POST
router.get("/get-all-posts", GetAllPostsController);

export default router;
