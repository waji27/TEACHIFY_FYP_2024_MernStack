import userModel from "../models/userModel.js";

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
