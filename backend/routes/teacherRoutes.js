import express from "express";
import { registerController } from "../controllers/teacherController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-new-teacher", registerController);

export default router;
