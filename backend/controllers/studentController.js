import PostsModel from "../models/PostsModel.js";
import userModel from "../models/userModel.js";

// Controller function for registering a new student
export const registerController = async (req, res) => {
  try {
    const { email, name, lastname, phone, subjects, education, gender, age } =
      req.body;
    if (!email) {
      return res.send({
        success: false,
        message: "email missing",
      });
    }
    if (!name) {
      return res.send({
        success: false,
        message: "name missing",
      });
    }
    if (!lastname) {
      return res.send({
        success: false,
        message: "lastname missing",
      });
    }
    if (!phone) {
      return res.send({
        success: false,
        message: "phone missing",
      });
    }
    if (!subjects) {
      return res.send({
        success: false,
        message: "subjects missing",
      });
    }
    if (!education) {
      return res.send({
        success: false,
        message: "education missing",
      });
    }

    if (!gender) {
      return res.send({
        success: false,
        message: "gender missing",
      });
    }
    if (!age) {
      return res.send({
        success: false,
        message: "age missing",
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
    const { title, description, teachingmode, userId } = req.body;
    const post = await PostsModel.create({
      title,
      description,
      teachingmode,
      user: userId,
    });
    res.status(201).send({ message: "Post created Successfully!", post });
  } catch (error) {
    res.status(500).send({ message: "Some thing went wrong", error });
  }
};

// Controller for getting all posts by a single user
export const GetAllPostsbyUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await PostsModel.find({ user: userId }).sort({
      createdAt: -1,
    });
    res.status(201).send({ message: "Posts fetched Successfully!", posts });
  } catch (error) {
    res.status(500).send({ message: "Some thing went wrong", error });
  }
};

// Controller for getting all posts
export const GetAllPostsController = async (req, res) => {
  try {
    const posts = await PostsModel.find().sort({
      createdAt: -1,
    });
    res.status(201).send({ message: "All Posts fetched Successfully!", posts });
  } catch (error) {
    res.status(500).send({ message: "Some thing went wrong", error });
  }
};
