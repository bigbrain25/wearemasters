/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
function Home() {
  const [countryBox, setCountryBox] = React.useState(true);
  function closeChooseCountry() {
    setCountryBox(false);
  }
  return (
    <div>
      <SideBar />

      <div className="lg:ml-72 bg-white text-bordyColor dark:bg-bordyColor dark:text-white pb-24">
        <main className="">
          <div className="flex justify-end py-6 px-8">
            <Link
              to="/login"
              className="uppercase py-2 px-6 text-sm font-medium   rounded-full text-white bg-appRed"
            >
              sign in
            </Link>
          </div>
          <Content />
          <div className="fixed bottom-0 left-0 w-full  z-50">
            <div className="items-center  bg-appRed py-4 px-4 sm:flex space-y-4 sm:space-y-0 justify-between text-gray-100">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  We are building a community of 1000+ Digital Artists
                </h2>
                <p className="text-sm">
                  Collect the rarest digital artworks from Africa and around the
                  world.
                </p>
              </div>
              <div>
                <Link
                  to="/sign-up"
                  className="bg-gray-100 font-medium px-12 capitalize py-2 text-gray-600 focus:outline-none rounded-full"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
