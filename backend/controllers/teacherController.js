import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import path from "path";

// register new teacher contorller
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
      teachingmode,
      address,
      age,
      experienceyears,
      description,
    } = req.body;

    // Handle profile picture upload
    let profilePicture = "";
    if (req.file) {
      profilePicture = `/uploads/profiles/${req.file.filename}`;
    }
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
    if (!teachingmode) {
      return res.send({
        success: false,
        message: "teachingmode missing",
      });
    }
    if (!address) {
      return res.send({
        success: false,
        message: "address missing",
      });
    }
    if (!age) {
      return res.send({
        success: false,
        message: "age missing",
      });
    }
    if (!experienceyears) {
      return res.send({
        success: false,
        message: "experienceyears missing",
      });
    }
    if (!description) {
      return res.send({
        success: false,
        message: "description missing",
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
      user.role = "teacher";
      user.phone = phone;
      user.subjects = subjects;
      user.education = education;
      user.gender = gender;
      user.teachingmode = teachingmode;
      user.experienceyears = experienceyears;
      user.age = age;
      user.description = description;
      user.profilePicture = profilePicture;
      // award default tokens on successful teacher registration
      user.tokens = 100;
    }

    const updatedUser = await user.save();

    res.status(201).send({
      success: true,
      message: "You have been added as a teacher Successfully!",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// controller for sending all teachers to client
export const getAllTeacherController = async (req, res) => {
  try {
    const allTeachers = await userModel.find({ role: "teacher" });
    if (!allTeachers || allTeachers.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No teachers found",
      });
    }

    res.status(200).send({
      success: true,
      message: "All teachers fetched successfully!",
      allTeachers,
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Controller for fetching all teachers count
export const AllTeachersCount = async (req, res) => {
  try {
    const teachersCount = await userModel.countDocuments({ role: "teacher" });
    res.status(200).send({
      success: true,
      teachersCount,
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

// Function for updating profile

export const UpdateTeacher = async (req, res) => {
  try {
    const {
      name,
      lastname,
      email,
      role,
      age,
      phone,
      gender,
      education,
      teachingmode,
      experienceyears,
      password,
      subjects,
      description,
    } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        lastname: lastname || user.lastname,
        email: email || user.email,
        role: role || user.role,
        age: age || user.age,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        gender: gender || user.gender,
        education: education || user.education,
        teachingmode: teachingmode || user.teachingmode,
        experienceyears: experienceyears || user.experienceyears,
        subjects: subjects || user.subjects,
        description: description || user.description,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while Update profile",
      error,
    });
  }
};

// Controller for applying to a post and deducting tokens
export const ApplyToPostAndDeductTokens = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { postId, cost } = req.body;

    // basic validation
    if (!userId) {
      return res.status(401).send({ success: false, message: "Unauthorized" });
    }
    if (!postId) {
      return res
        .status(400)
        .send({ success: false, message: "postId is required" });
    }

    // default deduction cost is 15 tokens unless provided and valid
    const deduction = Number.isFinite(Number(cost)) ? Number(cost) : 15;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    if (user.tokens < deduction) {
      return res
        .status(400)
        .send({ success: false, message: "Insufficient tokens" });
    }

    user.tokens = user.tokens - deduction;
    await user.save();

    return res.status(200).send({
      success: true,
      message: "Applied successfully and tokens deducted",
      tokens: user.tokens,
    });
  } catch (error) {
    console.error("Error in ApplyToPostAndDeductTokens:", error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
