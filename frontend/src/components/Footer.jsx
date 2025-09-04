import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../assets/file.svg";

const Footer = () => {
  const toastComingSoon = () => {
    toast.success("Feature coming soon");
  };
  return (
    <div>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 border-t-2 dark:border-t-0">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            className="flex flex-col justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="mr-3 h-6 sm:h-9" src={logo} alt="logo" />
            Teachify
          </Link>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Platform for connecting Teachers and Students
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="mr-4 hover:underline md:mr-6">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                onClick={toastComingSoon}
                to="/"
                className="mr-4 hover:underline md:mr-6"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/affiliate-program"
                className="mr-4 hover:underline md:mr-6"
              >
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="mr-4 hover:underline md:mr-6">
                FAQs
              </Link>
            </li>
            <li>
              <button
                onClick={toastComingSoon}
                to="/"
                className="mr-4 hover:underline md:mr-6"
              >
                Contact
              </button>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <Link to="#" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
