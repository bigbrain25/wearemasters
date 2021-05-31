import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import newlogo from "../assets/img/newlogo.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Link } from "react-router-dom";
import hero from "../assets/img/hero.png";

const NextDrop = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
      <div>
          
      <Link to="/account">
        <a
          className="py-2 bg-gray-700 w-full h-10 fixed z-50 bg-opacity-50"
          alt="#"
          href="#"
        >
          <div className="bg-gray-400 ml-3 bg-gray-600 w-6 h-6 rounded">
            <NavigateBeforeIcon style={{ color: "#fff" }} />
          </div>
        </a>
      </Link>
      <div className="">
        <img src={newlogo} className="h-36 ml-6 pt-10" alt="logo" />
          </div>
          <div className="flex">

      <form
        noValidate
        className="border border-gray-300 mt-20 h-96 w-56 p-7 ml-10 bg-gray-300 mb-1 rounded need-validation"
      >
        <div className="mb-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholder="Date"
          />
        </div>
        <div>
          <button className="p-3 px-5 w-40 mt-2 rounded text-xs text-center cursor-pointer text-bordyColor dark:text-gray-100 bg-blue-400 border-gray-300 dark:border-bordyColor">
            Upload Image
          </button>
        </div>
        <div>
          <input
            type="text"
            className="w-40 text-xs p-3 mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-300 dark:bg-gray-300 border-gray-300 dark:border-bordyColor focus:outline-none focus:border-b border-b focus:border-gray-500"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="w-40 text-xs p-3 mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-300 dark:bg-gray-300 border-gray-300 dark:border-bordyColor focus:outline-none focus:border-b border-b focus:border-gray-500"
            placeholder="Name Of Art"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="w-40 text-xs p-3 mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-300 dark:bg-gray-300 border-gray-300 dark:border-bordyColor focus:outline-none focus:border-b border-b focus:border-gray-500"
            placeholder="Description"
            required
          />
        </div>
        <button className="uppercase py-2 px-6 ml-6 mt-4 text-xs font-black rounded text-white bg-up">
          Update
        </button>
          </form>
          <div className="self-center ml-40">
              <img
                src={hero}
                alt="hero"
                className="h-1/2 mt-10 rounded w-1/2"
              />
              <h6 className="text-white font-black text-2xl ml-40 mt-2">
                Hey Dodo
              </h6>
              <h6 className="text-white font-black text-xl ml-28 text-appRed">
                Just Add Details Dodo
              </h6>
              </div>
            </div>
    </div>
  );
};

export default NextDrop;
