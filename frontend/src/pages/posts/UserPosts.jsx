import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import UserDashboardMenu from "../../components/UserDashboardMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const UserPosts = () => {
  const [auth, setAuth] = useAuth();
  const [posts, SetPosts] = useState([]);

  const fetchPostsByUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/v1/student/get-all-posts-by-user",
        {
          params: { userId: auth?.user?._id }, // ✅ backend expects query param
        }
      );
      SetPosts(response?.data?.posts || []);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Error in getting your posts"
      );
    }
  };

  useEffect(() => {
    if (auth?.user?._id) {
      fetchPostsByUser();
    }
  }, [auth?.user?._id]);

  return (
    <Layout>
      <UserDashboardMenu />
      {/* posts section  */}
      <section className="bg-white dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
        {posts.map((p) => (
          <article
            key={p._id}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-50 text-primary-950 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-500">
                {/* <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg> */}
                Teaching Mode
                <p className="text-green-500">: {p.teachingmode}</p>
              </span>
              <span className="text-sm">
                {formatDistanceToNow(new Date(p.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">{p.posttitle}</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              {p.postdescription}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {/* <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    /> */}

                <span className="font-medium dark:text-white">
                  Posted By: <span> </span>
                  <span className="font-medium dark:text-primary-200">
                    {p.userId?.name} {p.userId?.lastname}
                  </span>
                </span>
              </div>
              <button
                onClick={() => handleApplyClick(p._id)}
                className="inline-flex items-center font-medium text-primary-950 dark:text-primary-950 hover:underline"
              >
                Apply Now
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default UserPosts;
