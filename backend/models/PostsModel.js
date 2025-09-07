import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    posttitle: {
      type: String,
      required: true,
      trim: true,
    },
    postdescription: {
      type: String,
      required: true,
      trim: true,
    },
    teachingmode: {
      type: String,
      required: true,
      enum: ["online", "offline", "hybrid"], // optional validation
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Posts", postSchema);
