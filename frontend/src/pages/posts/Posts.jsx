import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../context/auth.jsx";
import toast from "react-hot-toast";

// import toast from "react-hot-toast";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useAuth();
  const [confirmForPostId, setConfirmForPostId] = useState(null);
  // function for fetching all posts

  const fetchPosts = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("auth"));
      const userId = authData?.user?._id;
      if (!userId) return;
      const response = await axios.get(
        `http://localhost:3030/api/v1/student/get-all-posts`
      );
      setPosts(response.data.posts || []);
    } catch (error) {
      console.error("Error in adding a new post", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleApplyClick = (postId) => {
    setConfirmForPostId(postId);
  };

  const handleConfirmApply = async () => {
    if (!confirmForPostId) return;
    try {
      const response = await axios.post(
        "http://localhost:3030/api/v1/teacher/apply-to-post",
        { postId: confirmForPostId, cost: 15 }
      );

      if (response?.data?.success) {
        // update local auth tokens
        const newTokens = response?.data?.tokens;
        const currentAuth = JSON.parse(localStorage.getItem("auth")) || {};
        const updatedAuth = {
          ...currentAuth,
          user: { ...currentAuth.user, tokens: newTokens },
        };
        localStorage.setItem("auth", JSON.stringify(updatedAuth));
        setAuth(updatedAuth);
        toast.success("Applied! 15 tokens deducted.");
      } else {
        toast.error(response?.data?.message || "Could not apply to post");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setConfirmForPostId(null);
    }
  };

  const handleCancel = () => setConfirmForPostId(null);

  return (
    <Layout>
      {/* posts section  */}
      {/* <section className="bg-white dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
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
      </section> */}
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
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
          </div>
        </div>
      </section>
      {confirmForPostId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Confirm Application
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Applying will deduct 15 tokens from your account. Continue?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmApply}
                className="px-4 py-2 rounded-md bg-primary-950 text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Posts;
