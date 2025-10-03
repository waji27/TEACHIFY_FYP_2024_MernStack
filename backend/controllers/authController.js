import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import mongoose from "mongoose";

// register new user controller
export const registerController = async (req, res) => {
  try {
    const { email, password, confirmPassword, agreement } = req.body;
    //validations
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!confirmPassword) {
      return res.send({ message: "confirmPassword is Required" });
    }
    if (!agreement) {
      return res.send({ message: "agreement is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //exisiting user
    if (password !== confirmPassword) {
      return res.status(200).send({
        success: false,
        message: "Passwords didn't matched!",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST LOGIN controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully!",
      user,
      // : {
      //   _id: user._id,
      //   name: user.name,
      //   email: user.email,
      //   phone: user.phone,
      //   address: user.address,
      //   role: user.role,
      // },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//resetPasswordController
// export const resetPasswordController = async (req, res) => {
//   try {
//     const { email, answer, newPassword, agreement } = req.body;
//     if (!email) {
//       res.status(400).send({ message: "Emai is required" });
//     }
//     if (!answer) {
//       res.status(400).send({ message: "answer is required" });
//     }
//     if (!newPassword) {
//       res.status(400).send({ message: "New Password is required" });
//     }
//     if (!agreement) {
//       res.status(400).send({ message: "agreement  is required" });
//     }
//     //check
//     const user = await userModel.findOne({ email, answer });
//     //validation
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Wrong Email Or Answer",
//       });
//     }
//     const hashed = await hashPassword(newPassword);
//     await userModel.findByIdAndUpdate(user._id, { password: hashed });
//     res.status(200).send({
//       success: true,
//       message: "Password Reset Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Something went wrong",
//       error,
//     });
//   }
// };

// Controller for fetching all users count
export const AllUsersCount = async (req, res) => {
  try {
    const UsersCount = await userModel.countDocuments();
    res.status(200).send({
      success: true,
      UsersCount,
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

// Credit tokens to a user (used for purchasing plans)
export const creditTokensController = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { amount } = req.body; // number of tokens to add
    if (!userId) {
      return res.status(401).send({ success: false, message: "Unauthorized" });
    }
    const tokensToAdd = Number(amount);
    if (!Number.isFinite(tokensToAdd) || tokensToAdd <= 0) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid token amount" });
    }
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }
    user.tokens = (user.tokens || 0) + tokensToAdd;
    await user.save();
    return res
      .status(200)
      .send({ success: true, message: "Tokens credited", tokens: user.tokens });
  } catch (error) {
    console.error("Error in creditTokensController:", error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
