/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NewSideBar from "../components/NewSideBar";

function Home() {
  const [countryBox, setCountryBox] = React.useState(true);
  function closeChooseCountry() {
    setCountryBox(false);
  }
  const [display, setDisplay] = useState(true);
  const close = () => {
    setDisplay(!display);
  }
    
  return (
    <div>
      <div className="py-1 -mt-5 bg-black w-full h-10 fixed z-30 bg-opacity-90">
      <NewSideBar />
      </div>
      <div className="ml-8 bg-white text-bordyColor dark:bg-bordyColor dark:text-white pb-24">
        <main className="">
          <div className="justify-end px-8">
            {/* <Link
              to="/login"
              className="uppercase py-2 px-6 text-sm font-medium   rounded-full text-white bg-appRed"
            >
              sign in
            </Link> */}
          </div>
          <Content />
          {display ? (
          <div className="box fixed bottom-0 left-0 w-full z-50">
            <div className="items-center h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ... py-4 px-4 sm:flex space-y-4 sm:space-y-0 text-gray-100">
                <button className="mb-8">x</button>
                <div className="border-l h-14 border-white-600 border-opacity-90 mt-4 ml-16"/>
              <div className="space-y-1 ml-6">
                <h2 className="text-base sm:text-xl font-semibold">
                  We are building a community of 1000+ Digital Artists
                </h2>
              </div>
              <div className="ml-auto">
                <Link
                  to="/sign-up"
                  className="bg-gray-100 font-medium px-12 capitalize py-2 text-gray-600 flex focus:outline-none rounded"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>) : null}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
