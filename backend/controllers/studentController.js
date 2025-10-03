import PostsModel from "../models/PostsModel.js";
import userModel from "../models/userModel.js";
import path from "path";

// Controller function for registering a new student
export const registerController = async (req, res) => {
  try {
    const {
      email,
      name,
      lastname,
      phone,
      subjects,
      education,
      gender,
      description,
      age,
    } = req.body;

    // Handle profile picture upload
    let profilePicture = "";
    if (req.file) {
      profilePicture = `/uploads/profiles/${req.file.filename}`;
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email required",
      });
    }
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "name required",
      });
    }
    if (!lastname) {
      return res.status(400).send({
        success: false,
        message: "lastname required",
      });
    }
    if (!phone) {
      return res.status(400).send({
        success: false,
        message: "phone required",
      });
    }
    if (!subjects) {
      return res.status(400).send({
        success: false,
        message: "subjects required",
      });
    }
    if (!education) {
      return res.status(400).send({
        success: false,
        message: "education required",
      });
    }
    if (!gender) {
      return res.status(400).send({
        success: false,
        message: "gender required",
      });
    }
    if (!description) {
      return res.status(400).send({
        success: false,
        message: "description required",
      });
    }
    if (!age) {
      return res.status(400).send({
        success: false,
        message: "age required",
      });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found with this email",
      });
    }

    if (user.role === "teacher" || user.role === "student") {
      return res.status(200).send({
        success: false,
        message: "You are already a part of Affiliate Program, Check Dashboard",
      });
    }

    if (user) {
      user.name = name;
      user.lastname = lastname;
      user.role = "student";
      user.phone = phone;
      user.subjects = subjects;
      user.education = education;
      user.gender = gender;
      user.age = age;
      user.description = description;
      user.tokens = 100;

      user.profilePicture = profilePicture;
    }

    const updatedUser = await user.save();

    res.status(201).send({
      success: true,
      message: "You have been added as a student Successfully!",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// api controller for getting all students
export const getAllStudentsController = async (req, res) => {
  try {
    const allStudents = await userModel.find({ role: "student" });

    if (!allStudents || allStudents.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No Students found",
      });
    }

    res.status(200).send({
      success: true,
      message: "All Students fetched successfully!",
      allStudents,
    });
  } catch (error) {
    console.error("Error fetching Students:", error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

// Controller for fetching all students count
export const AllStudentsCount = async (req, res) => {
  try {
    const studentsCount = await userModel.countDocuments({ role: "student" });
    res.status(200).send({
      success: true,
      studentsCount,
    });
  } catch (error) {
    console.error("Error in fetching teachersCount:", error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Controller for adding new post by user
export const AddNewPostController = async (req, res) => {
  try {
    const { posttitle, teachingmode, postdescription, userId } = req.body;

    if (!posttitle || !postdescription || !teachingmode || !userId) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are required" });
    }

    // check if post already exits and return
    // const existingPost = await PostsModel.find({ posttitle: posttitle });
    // if (existingPost) {
    //   return res.status(403).send({
    //     success: false,
    //     message: "Post already exits with this title",
    //     existingPost,
    //   });
    // }

    const post = await new PostsModel({
      posttitle,
      postdescription,
      teachingmode,
      userId,
    }).save();

    res
      .status(201)
      .send({ success: true, message: "Post created Successfully!", post });
  } catch (error) {
    res.status(500).send({ message: "Some thing went wrong", error });
  }
};

// Controller for getting all posts by a single user
export const GetAllPostsbyUserController = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res
        .status(400)
        .send({ success: false, message: "userId is required" });
    }
    const posts = await PostsModel.find({ userId }).populate({
      path: "userId",
      select: "name lastname",
    });
    res
      .status(200)
      .send({ success: true, message: "Posts fetched Successfully!", posts });
  } catch (error) {
    res.status(500).send({ message: "Some thing went wrong", error });
  }
};

// Controller for getting all posts
export const GetAllPostsController = async (req, res) => {
  try {
    const posts = await PostsModel.find().populate({
      path: "userId",
      select: "name lastname",
    });
    res.status(201).send({ message: "All Posts fetched Successfully!", posts });
  } catch (error) {
    res.status(500).send({ message: "Some thing went wrong", error });
  }
};
