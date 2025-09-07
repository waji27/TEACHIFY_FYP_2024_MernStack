import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";
import UserDashboardMenu from "../../components/UserDashboardMenu";

const StudentProfEdit = () => {
  //context
  const [auth, setAuth] = useAuth();

  // user data
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [teachingmode, setTeachingMode] = useState("");
  const [experienceyears, setExperienceYears] = useState("");
  const [subjects, setSubjects] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!auth?.user) return;
    const {
      name,
      lastname,
      email,
      role,
      age,
      phone,
      gender,
      subjects,
      education,
      teachingmode,
      experienceyears,
      description,
    } = auth.user;
    setName(name || "");
    setLastName(lastname || "");
    setEmail(email || "");
    setRole(role || "");
    setAge(age || 0);
    setPhoneNo(phone || "");
    setGender(gender || "");
    setEducation(education || "");
    setTeachingMode(teachingmode || "");
    setExperienceYears(experienceyears || "");
    setSubjects(subjects || "");
    setDescription(description || "");
  }, [auth?.user]);

  // form function to update student data in profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:3030/api/v1/teacher/teacher-profile-update",
        {
          name,
          lastname,
          email,
          role,
          age,
          phone,
          gender,
          education,
          teachingmode,
          experienceyears,
          password,
          subjects,
          description,
        },
        {
          headers: {
            Authorization: auth?.token, // pass token from context
          },
        }
      );
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <UserDashboardMenu />

      <section className="bg-gray-50 dark:bg-gray-900">
        <div>
          {/* Main modal */}
          <div
            id="updateProductModal"
            tabIndex={-1}
            aria-hidden="true"
            className=" overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full pb-8"
          >
            <div className="relative px-12 w-full h-full md:h-auto">
              {/* Modal content */}
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* Modal header */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Profile
                  </h3>
                </div>
                {/* Modal body */}
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Gender
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 dark:text-white">
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)}
                          />
                          Male
                        </label>
                        <label className="flex items-center gap-2 dark:text-white">
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)}
                          />
                          Female
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Role in Platform
                      </label>
                      <input
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        name="role"
                        id="role"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneno"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone No
                      </label>
                      <input
                        onChange={(e) => setPhoneNo(e.target.value)}
                        value={phone}
                        type="text"
                        name="phoneno"
                        id="phoneno"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subjects"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Subjects
                      </label>
                      <input
                        onChange={(e) => setSubjects(e.target.value)}
                        value={subjects}
                        type="text"
                        name="subjects"
                        id="subjects"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="age"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Age
                      </label>
                      <input
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        type="number"
                        name="age"
                        id="age"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="education"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Education
                      </label>
                      <input
                        onChange={(e) => setEducation(e.target.value)}
                        value={education}
                        type="text"
                        name="education"
                        id="education"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        name="description"
                        id="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div> */}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update Account
                    </button>
                    <button
                      type="button"
                      className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      <svg
                        className="mr-1 -ml-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Delete My Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </Layout>
  );
};

export default StudentProfEdit;
