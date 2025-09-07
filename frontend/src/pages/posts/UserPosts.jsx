import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import UserDashboardMenu from "../../components/UserDashboardMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const UserPosts = () => {
  const [auth, setAuth] = useAuth();
  const [posts, SetPosts] = useState([]);

  const fetchPostsByUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/v1/student/get-all-posts-by-user",
        { userId: auth?.user?._id }
      );
      SetPosts(response?.data?.posts);
    } catch (error) {
      toast.error("Error in getting your posts", error);
    }
  };

  useEffect(() => {
    fetchPostsByUser();
  }, []);

  return (
    <Layout>
      <UserDashboardMenu />
      {/* posts section  */}
      <section className="bg-white dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
        {posts.map((p) => (
          <div
            key={p._id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {p.posttitle}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {p.postdescription}...
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Teaching Mode: <span className="text-orange-500">Online</span>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Subjects:{" "}
              <span className="text-white dark-text-gray-400">
                Maths, Physics
              </span>
            </p>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Apply Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400 mt-auto">
                Posted by <span className="text-green-500">Username</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default UserPosts;
