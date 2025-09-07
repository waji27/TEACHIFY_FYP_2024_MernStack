import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import UserDashboardMenu from "../../components/UserDashboardMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const AddNewPost = () => {
  const [auth, setAuth] = useAuth();
  const [posttitle, setPostTitle] = useState("");
  const [teachingmode, setTeachingMode] = useState("");
  const [postdescription, setPostDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/api/v1/student/add-new-post",
        { posttitle, teachingmode, postdescription, userId: auth?.user?._id }
      );
      toast.success(response?.data?.message);
      setPostTitle("");
      setTeachingMode("");
      setPostDescription("");
    } catch (error) {
      console.error("Error in adding a new post", error);
    }
  };

  return (
    <Layout>
      <UserDashboardMenu />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Add New Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="posttitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Post Title
              </label>
              <input
                value={posttitle}
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
                type="text"
                id="posttitle"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Teaching Mode
              </label>
              <select
                value={teachingmode}
                onChange={(e) => {
                  setTeachingMode(e.target.value);
                }}
                name="teachingmode"
                id="teachingmode"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
                <option value="" disabled>
                  Select teaching mode
                </option>

                <option
                  value="online"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Online
                </option>
                <option
                  value="offline"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Offline
                </option>
                <option
                  value="both"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Both
                </option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postdescription"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Post Description
              </label>
              <textarea
                value={postdescription}
                onChange={(e) => {
                  setPostDescription(e.target.value);
                }}
                id="postdescription"
                rows={3}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a description for your requirements..."
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Share My Post
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AddNewPost;
