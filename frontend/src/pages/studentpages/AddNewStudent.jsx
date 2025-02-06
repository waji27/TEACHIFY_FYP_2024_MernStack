import React, { useState } from "react";
import Layout from "../../components/Layout";

const AddNewStudent = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [subjects, setSubjects] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");
  const [teachingmode, setTeachingmode] = useState("");
  const [age, setAge] = useState("0");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/api/v1/teacher/add-new-teacher",
        {
          email,
          name,
          lastname,
          phone,
          subjects,
          education,
          gender,
          teachingmode,
          age,
          experienceyears,
          description,
          address,
        }
      );

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        const userData = JSON.parse(localStorage.getItem("auth")) || {};
        userData.user.role = "teacher";
        localStorage.setItem("auth", JSON.stringify(userData));
        navigate("/");
      } else {
        toast.error(response?.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Layout>
      <section className="p-10">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {/* user email  */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={email}
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              readOnly
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* first name and last name  */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          {/* phone number and subjects  */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-4 h-4 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </span>
              <input
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                id="floating-phone-number"
                className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                pattern="[0-9]{4}-[0-9]{7}"
                placeholder=""
              />
              <label
                htmlFor="floating-phone-number"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone number(Ex. 1234-5627890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={subjects}
                onChange={(e) => {
                  setSubjects(e.target.value);
                }}
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subjects (Ex. Maths, Science)
              </label>
            </div>
          </div>

          {/* current level of education  */}
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Current level of education
            </label>
            <select
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="PreSchool">PreSchool</option>
              <option value="Primary">Primary</option>
              <option value="Matric(SSC)">Matric(SSC)</option>
              <option value="Intermediate(HSSC)">Intermediate(HSSC)</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>

          {/* gender and teaching mode  */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Select your Gender
              </label>
              <select
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Select your Teaching Mode
              </label>
              <select
                value={teachingmode}
                onChange={(e) => {
                  setTeachingmode(e.target.value);
                }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Both">Both</option>
                <option value="Online only">Online only</option>
                <option value="Offline only">Offline only</option>
              </select>
            </div>
          </div>

          {/* age  */}
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="small-range"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Your Age ({age} years)
            </label>
            <input
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              id="small-range"
              type="range"
              min={20}
              max={70}
              className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default AddNewStudent;
