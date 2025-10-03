import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },

    // data that will be added after affiliation
    name: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    subjects: {
      type: String,
      default: "",
    },
    education: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "Other",
    },
    teachingmode: {
      type: String,
      default: "",
    },
    age: {
      type: String,
      default: null,
    },
    experienceyears: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    tokens: {
      type: Number,
      default: 0,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
