import express from "express";
import {
  getAllUsersController,
  getAllTeachersAdminController,
  getAllStudentsAdminController,
  getAllPostsAdminController,
  updateUserController,
  deleteUserController,
  updatePostController,
  deletePostController,
  getDashboardStatsController,
} from "../controllers/adminController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
// All admin routes require sign in and admin role (1)

// GET Dashboard Stats
router.get("/dashboard-stats", requireSignIn, isAdmin, getDashboardStatsController);

// GET ALL USERS || METHOD GET
router.get("/users", requireSignIn, isAdmin, getAllUsersController);

// GET ALL TEACHERS || METHOD GET
router.get("/teachers", requireSignIn, isAdmin, getAllTeachersAdminController);

// GET ALL STUDENTS || METHOD GET
router.get("/students", requireSignIn, isAdmin, getAllStudentsAdminController);

// GET ALL POSTS || METHOD GET
router.get("/posts", requireSignIn, isAdmin, getAllPostsAdminController);

// UPDATE USER || METHOD PUT
router.put("/users/:userId", requireSignIn, isAdmin, updateUserController);

// DELETE USER || METHOD DELETE
router.delete("/users/:userId", requireSignIn, isAdmin, deleteUserController);

// UPDATE POST || METHOD PUT
router.put("/posts/:postId", requireSignIn, isAdmin, updatePostController);

// DELETE POST || METHOD DELETE
router.delete("/posts/:postId", requireSignIn, isAdmin, deletePostController);

export default router;
