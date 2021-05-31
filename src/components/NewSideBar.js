/* eslint-disable */
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NewSideBarData } from "../components/NewSideBarData";
import { Link } from "react-router-dom";
import newlogo from "../assets/img/newlogo.png";
import { IconContext } from "react-icons";

const NewSideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ size: "19px" }}>
        <span className="bg-transparent h-8 flex justify-start items-center">
          <Link to="#" className="ml-8 text-2xl bg-none">
            <FaIcons.FaBars onClick={showSidebar} color="purple" />
          </Link>
        </span>
        <nav
          className={
            sidebar
              ? "bg-black w-52 h-full left-0 transition duration-700 ease-in-out fixed top-0 overflow-hidden z-50 bg-opacity-90"
              : "bg-black w-52 h-full flex justify-center fixed transition duration-700 ease-in-out top-0 -left-full overflow-hidden z-50 bg-opacity-90"
          }
        >
          <ul className="w-full h-full pb-32" onClick={showSidebar}>
            <li className="bg-transparent w-full h-20 flex justify-start items-center">
              <Link to="#" className="ml-2 text-xl bg-none">
                <img
                  src={newlogo}
                  className="mt-8 px-14 py-10 -ml-12"
                  alt="logo"
                />
                <div className="-mt-10 relative -top-4">
                  <div className="relative top-7 left-2">
                    <AiIcons.AiOutlineSearch color="gray" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-44 px-8 text-xs py-1 border text-bordyColor dark:text-gray-100 bg-gray-white dark:bg-bordyColor border-gray-300 dark:border-bordyColor focus:outline-none focus:border focus:border-gray-500 rounded"
                  />
                </div>
              </Link>
            </li>
            {NewSideBarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-start items-center p-3 h-8"
                >
                  <Link
                    to={item.path}
                    className="ml-2 mt-28 text-xs items-center p-2 rounded hover:bg-appGray flex text-white"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="mt-12 mb-3 pt-4 mx-8 border-b border-gray-400 border-opacity-50" />
            <div className="ml-10 mt-4">
              <div className="flex mb-2">
                <AiIcons.AiFillFormatPainter color="pink" size="15px" />
                <li className="text-gray-300 ml-1 text-xs">Featured Artists</li>
              </div>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Iconicevol</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Ipneuma</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Zinadum</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Taymi Busari</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Denwaigwe</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Fred Ebami</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Alaim Ngann</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">pengrapher</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Dorgu</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Adegoke</li>
              </Link>
            </div>
            <div className="mt-4 mb-3 pt-4 mx-8 border-b border-gray-400 border-opacity-50" />
            <div className="ml-10">
              <div className="flex mb-2">
                <AiIcons.AiOutlineGitlab color="pink" size="15px" />
                <li className="text-gray-300 ml-1 text-xs">Curators</li>
              </div>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Art House</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2"> Mydrim</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">Ubuntu</li>
              </Link>
              <Link to="#" className="hover:bg-appGray">
                <li className="text-white text-xs mt-2">MPBR Agency</li>
              </Link>
            </div>
            <li className="text-white ml-10 mt-14">Sign Out</li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NewSideBar;
