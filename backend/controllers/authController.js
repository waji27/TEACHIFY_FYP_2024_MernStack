import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

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

//POST LOGIN
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
      return res.status(404).send({
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
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
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
