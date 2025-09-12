import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logs.png";

const AffiliateProg = () => {
  const navigate = useNavigate();

  const handleCLick = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (!authData) {
      toast.error("You have'nt logged in!");
      return; // stop execution here
    }
    if (
      authData?.user?.role == "teacher" ||
      authData?.user?.role == "student"
    ) {
      toast.error(
        "You are already a part of Affiliate Program, Check Dashboard"
      );
      return;
    } else {
      navigate("/add-new-teacher");
    }
  };

  const handleCLick2 = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (!authData) {
      toast.error("You have'nt logged in!");
      return;
    }
    if (
      authData?.user?.role == "teacher" ||
      authData?.user?.role == "student"
    ) {
      toast.error(
        "You are already a part of Affiliate Program, Check Dashboard"
      );
      return;
    } else {
      navigate("/add-new-student");
    }
  };

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Flowbite is out! See what's new
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            What is the Teachify Affiliate Program?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            The Teachify Affiliate Program allows you to earn money by Teaching
            students and writting and selling e-books in the Market.You can
            approach and learn from the best teachers by adding posts and as a
            teacher you can maintain your profile and apply on the posts added
            by students as per their needs your skills.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#whocanjoin"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg  bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 shadow-lg shadow-primary-500/50 dark:shadow-lg dark:shadow-primary-800/80"
            >
              Lets Join!
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Watch video
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              Know More!
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-primary-500 sm:justify-between">
              <a
                href="#whyshouldjoin"
                className="mr-5 mb-5 lg:mb-0 hover:text-primary-800 text-primary-400 dark:hover:text-primary-400 text-xl"
              >
                Why Should I Join!
              </a>
              <a
                href="#howcanjoin"
                className="mr-5 mb-5 lg:mb-0 hover:text-primary-800 text-primary-400  dark:hover:text-primary-400 text-xl"
              >
                How Can I join!
              </a>
              <a
                href="#whocanjoin"
                className="mr-5 mb-5 lg:mb-0 hover:text-primary-800 
                text-primary-400 dark:hover:text-primary-400 text-xl"
              >
                Who Can Join!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900" id="whyshouldjoin">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-12">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
            Why Should I Join!
          </h1>
          <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400  text-center">
            Easy to Join – Sign up in minutes and get your referral link
            instantly.
          </p>
          <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Earn Commission – Get a percentage of every successful transaction.
          </p>
          <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            No Limits – The more you refer, the more you earn!
          </p>
          <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Track Your Earnings – Access real-time analytics of your referrals.
          </p>
          <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Help Others – Connect students with qualified tutors while earning.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900" id="howcanjoin">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mx-auto place-self-center lg:col-span-12 my-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
              How Can I join!
            </h1>
          </div>
          <div className="mx-auto place-self-center lg:col-span-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-800 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                  STEP 1
                </h2>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                  Sign up and login to your account.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-800 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                  STEP 2
                </h2>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                  Get to Affiliate program by clicking "Get Start!" on a home
                  page, Read the affiliation conditions and click on one of the
                  buttons, either "Gor for a Teacher!" or "Go for a Student!".
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-800 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx={12} cy={5} r={3} />
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                  STEP 3
                </h2>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                  You'll get to a page with a form, fill up details and submit
                  the form.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-800 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                  STEP 4
                </h2>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                  After submitting the form you'll get the confirmation email
                  and here you go!
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-800 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                  FINISH
                </h2>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                  Now you can update and delete you profile as per your
                  skills.Go for it!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-6 lg:flex justify-center align-items-center">
            <img
              className="lg:w-3/5 md:w-1/2 object-center rounded-lg md:mt-0 mt-12 mx-auto"
              src={logo}
              alt="step"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900" id="whocanjoin">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              {" "}
              Who Can Join!
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              {" "}
              Anyone! Whether you’re a learner or teacher, if you have skills
              and thirst to learn or teach, you can earn with Teachify.
            </p>
            <button
              onClick={handleCLick2}
              className="text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 shadow-lg shadow-primary-500/50 dark:shadow-lg dark:shadow-primary-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-3 w-full"
            >
              Go for a Student!
            </button>
            <button
              onClick={handleCLick}
              className="text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 shadow-lg shadow-primary-500/50 dark:shadow-lg dark:shadow-primary-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-3 w-full"
            >
              Go for a Teacher!
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AffiliateProg;
