import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const UserDashboardMenu = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 flex items-start py-3">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
          {/* Start coding here */}
          <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex items-center justify-center p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <Link
                to={
                  auth?.user?.role === "teacher"
                    ? "/teacher-dashboard"
                    : "/student-dashboard"
                }
                className="text-gray-600 hover:text-white border border-primary-950 hover:bg-primary-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Profile
              </Link>
              <Link
                to={
                  auth?.user?.role === "teacher"
                    ? "/teacher-edit-profile"
                    : "/student-edit-profile"
                }
                className="text-gray-600 hover:text-white border border-primary-950 hover:bg-primary-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Edit Profile
              </Link>
              <Link
                to="/posts-by-user"
                type="button"
                className="text-gray-600 hover:text-white border border-primary-950 hover:bg-primary-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                My Posts
              </Link>
              <Link
                to="/add-new-post"
                type="button"
                className="text-gray-600 hover:text-white border border-primary-950 hover:bg-primary-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Add New Post
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboardMenu;
