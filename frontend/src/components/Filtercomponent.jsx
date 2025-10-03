import React, { useState } from "react";

const Filtercomponent = ({
  onSearchChange,
  onSubjectFilterChange,
  onTeachingModeFilterChange,
  selectedSubjects = [],
  selectedTeachingModes = [],
}) => {
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [actionsDropdownVisible, setActionsDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleActionsDropdown = () =>
    setActionsDropdownVisible(!actionsDropdownVisible);
  const toggleFilterDropdown = () =>
    setFilterDropdownVisible(!filterDropdownVisible);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  // Handle subject checkbox change
  const handleSubjectChange = (subject, isChecked) => {
    let updatedSubjects;
    if (isChecked) {
      updatedSubjects = [...selectedSubjects, subject];
    } else {
      updatedSubjects = selectedSubjects.filter((s) => s !== subject);
    }
    onSubjectFilterChange(updatedSubjects);
  };

  // Handle teaching mode checkbox change
  const handleTeachingModeChange = (mode, isChecked) => {
    let updatedModes;
    if (isChecked) {
      updatedModes = [...selectedTeachingModes, mode];
    } else {
      updatedModes = selectedTeachingModes.filter((m) => m !== mode);
    }
    onTeachingModeFilterChange(updatedModes);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex items-center flex-col">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full pt-3">
        {/* Start coding here */}
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
              <div className="flex items-center w-full space-x-3 md:w-auto">
                <button
                  aria-expanded={actionsDropdownVisible}
                  aria-controls="actionsDropdown"
                  onClick={toggleActionsDropdown}
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  type="button"
                >
                  <svg
                    className="-ml-1 mr-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                  Teaching Mode
                </button>
                <button
                  aria-expanded={filterDropdownVisible}
                  aria-controls="filterDropdown"
                  onClick={toggleFilterDropdown}
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Filter by Subjects
                  <svg
                    className="-mr-1 ml-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search teachers by name, subjects, education..."
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
        {/* Dropdown menu for filter Subjects */}
        <div
          id="filterDropdown"
          className={`z-10 ${
            filterDropdownVisible ? "block" : "hidden"
          } w-100 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
        >
          {/* <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Subjects
          </h6> */}
          <ul
            className="text-sm flex flex-row gap-3 justify-center items-center flex-wrap"
            aria-labelledby="dropdownDefault"
          >
            <li className="flex items-center">
              <input
                id="English"
                type="checkbox"
                checked={selectedSubjects.includes("English")}
                onChange={(e) =>
                  handleSubjectChange("English", e.target.checked)
                }
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="English"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                English
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Urdu"
                type="checkbox"
                checked={selectedSubjects.includes("Urdu")}
                onChange={(e) => handleSubjectChange("Urdu", e.target.checked)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Urdu"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Urdu
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Maths"
                type="checkbox"
                checked={selectedSubjects.includes("Maths")}
                onChange={(e) => handleSubjectChange("Maths", e.target.checked)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Maths"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Maths
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Geography"
                type="checkbox"
                checked={selectedSubjects.includes("Geography")}
                onChange={(e) =>
                  handleSubjectChange("Geography", e.target.checked)
                }
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Geography"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Geography
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="Geography"
                type="checkbox"
                checked={selectedSubjects.includes("Computer")}
                onChange={(e) =>
                  handleSubjectChange("Computer", e.target.checked)
                }
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Geography"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Computer
              </label>
            </li>
          </ul>
        </div>

        {/* Dropdown menu for filer teaching mode*/}
        <div
          id="actionsDropdown"
          className={`z-10 ${
            actionsDropdownVisible ? "block" : "hidden"
          } w-100 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
          //   style={{
          //     position: "absolute",
          //     inset: "0px auto auto 0px; margin: 0px",
          //     transform: "translate3d(901px, 64px, 0px)",
          //   }}
        >
          <ul className="text-sm flex flex-row gap-3 justify-center items-center flex-wrap">
            <li className="flex items-center">
              <input
                id="online"
                type="checkbox"
                checked={selectedTeachingModes.includes("online")}
                onChange={(e) =>
                  handleTeachingModeChange("online", e.target.checked)
                }
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 
                 focus:ring-primary-500 dark:focus:ring-primary-600 
                 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="online"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Online only
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="offline"
                type="checkbox"
                checked={selectedTeachingModes.includes("offline")}
                onChange={(e) =>
                  handleTeachingModeChange("offline", e.target.checked)
                }
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 
                 focus:ring-primary-500 dark:focus:ring-primary-600 
                 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="offline"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Offline only
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="both"
                type="checkbox"
                checked={selectedTeachingModes.includes("both")}
                onChange={(e) =>
                  handleTeachingModeChange("both", e.target.checked)
                }
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 
                 focus:ring-primary-500 dark:focus:ring-primary-600 
                 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="both"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Both
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filtercomponent;
