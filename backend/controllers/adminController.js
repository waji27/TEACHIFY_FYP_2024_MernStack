import userModel from "../models/userModel.js";
import PostsModel from "../models/PostsModel.js";

// Get all users (for admin)
export const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "All users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

// Get all teachers (for admin)
export const getAllTeachersAdminController = async (req, res) => {
  try {
    const teachers = await userModel
      .find({ role: "teacher" })
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All teachers fetched successfully",
      teachers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching teachers",
      error: error.message,
    });
  }
};

// Get all students (for admin)
export const getAllStudentsAdminController = async (req, res) => {
  try {
    const students = await userModel
      .find({ role: "student" })
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All students fetched successfully",
      students,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching students",
      error: error.message,
    });
  }
};

// Get all posts (for admin)
export const getAllPostsAdminController = async (req, res) => {
  try {
    const posts = await PostsModel.find({})
      .populate("userId", "name lastname email role")
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All posts fetched successfully",
      posts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching posts",
      error: error.message,
    });
  }
};

// Update user (for admin)
export const updateUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    const user = await userModel.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating user",
      error: error.message,
    });
  }
};

// Delete user (for admin)
export const deleteUserController = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userModel.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Also delete all posts by this user
    await PostsModel.deleteMany({ userId });

    res.status(200).send({
      success: true,
      message: "User and related posts deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting user",
      error: error.message,
    });
  }
};

// Update post (for admin)
export const updatePostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const updateData = req.body;

    const post = await PostsModel.findByIdAndUpdate(
      postId,
      { $set: updateData },
      { new: true }
    ).populate("userId", "name lastname email role");

    if (!post) {
      return res.status(404).send({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating post",
      error: error.message,
    });
  }
};

// Delete post (for admin)
export const deletePostController = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await PostsModel.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).send({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting post",
      error: error.message,
    });
  }
};

// Get dashboard stats (for admin)
export const getDashboardStatsController = async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments();
    const totalTeachers = await userModel.countDocuments({ role: "teacher" });
    const totalStudents = await userModel.countDocuments({ role: "student" });
    const totalPosts = await PostsModel.countDocuments();

    res.status(200).send({
      success: true,
      stats: {
        totalUsers,
        totalTeachers,
        totalStudents,
        totalPosts,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching dashboard stats",
      error: error.message,
    });
  }
};
