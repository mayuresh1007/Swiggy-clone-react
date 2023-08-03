import logo from "../assets/img/Newlogo.png";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import UserContext from "../context/userConntext";
const AppHeader = () => {
  const { user } = useContext(UserContext);
  const [navbtn, setNavbtn] = useState(false);
  const [hidden, setHidden] = useState("hidden");
  //   const handleClick = () => {
  //     if (navbtn) {
  //       setNavbtn(true);
  //       setHidden("");
  //     } else {
  //       setNavbtn(false);
  //       setHidden("hidden");
  //     }
  //     console.log(navbtn, hidden);
  //   };
  const handleClick = () => {
    setNavbtn((prevNavbtn) => !prevNavbtn);
    setHidden((prevHidden) => (prevHidden === "" ? "hidden" : ""));
    console.log(navbtn, hidden);
  };

  const ShowInfo = () => {
    console.log(user.name);
  };
  console.log(user.name);

  return (
    <React.Fragment>
      <nav className={`bg-white border-gray-200 dark:bg-logocolor `}>
        {/* <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"> */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-20 cursor-pointer " />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            // aria-expanded="false" // if the display is 450px then make is
            aria-expanded={`${navbtn}`}
            // aria-expanded={`${navbtn ? "true" : "false"}`}
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            // className="hidden w-full md:block md:w-auto" //
            // className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} //
            className={`${hidden} w-full md:block md:w-auto mr-6`} //
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-logocolor md:dark:bg-logocolor dark:border-gray-700">
              
              <li>
                <Link
                  to="/"
                  //   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  //   aria-current="page"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active:bg-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/instamart"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Instamart
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cart
                </Link>
              </li>
              <div className="italic capitalize cursor-pointer">
                <span onClick={ShowInfo}>{user.name}</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default AppHeader;
