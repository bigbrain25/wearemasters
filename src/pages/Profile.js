/* eslint-disable */
import React from "react";
import Carousel from "react-multi-carousel";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import artist from "../assets/img/artis.gif";
import Footer from "../components/Footer";
import NewSideBar from "../components/NewSideBar";

function Profile() {
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 1043248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
  const collection = [
    {
      img: "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
    },
    {
      img: "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
    },
    {
      img: "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
    },
    {
      img: "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
    },
    {
      img: "https://lh3.googleusercontent.com/KBPFHbreehLr7iQYTAeAmAoQqM4GwlRJk9O9x9bLpBy1uVqtJEZTTEXkJ2-0bClw1zvFAmEDhXHctKAdW8tp2LwpMSMSROsUlyjS1A=s0",
    },
    {
      img: "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
    },
  ];
  const creation = [
    {
      img: "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
    },
    {
      img: "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const getCollections = collection.map((img) => {
    return (
      <div className="w-full px-2 py-2">
        <img src={img.img} className="object-cover w-full"></img>
      </div>
    );
  });
  const getCreations = creation.map((img) => {
    return (
      <div className="w-full h-track">
        <img src={img.img} className="object-cover w-full h-full"></img>
      </div>
    );
  });
  const Navigation = ({ goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group absolute top-0 right-0 left-0 text-center">
        <button
          onClick={() => goToSlide(0)}
          className={
            currentSlide === 0
              ? "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none border-b border-gray-400"
              : "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none"
          }
        >
          {" "}
          creations{" "}
        </button>
        <button
          onClick={() => goToSlide(1)}
          className={
            currentSlide === 1
              ? "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none border-b border-gray-400"
              : "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none"
          }
        >
          {" "}
          series{" "}
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className="py-1 bg-black w-full h-10 fixed z-30 bg-opacity-90">
      <NewSideBar />
      </div>
      <div className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto text-bordyColor dark:text-gray-100 py-1 relative lg:px-16 px-4 mb-16">
          <div className="grid grid-cols-12 gap-4 -mb-60">
            <div className="col-span-12 sm:col-span-4 lg:col-span-5">
              <div className="w-24 h-24">
                <img src={artist} className="mx-auto rounded-full" />
              </div>
              <h4 className="mt-4">@artistname</h4>
              <div className="flex space-x-6">
                <p>Followers: 786</p>
                <p className="">Following: 6</p>
              </div>

              <div className="my-4">
                <button className="text-appRed focus:outline-none">
                  twitter.com/@artistname
                </button>
              </div>
              <div className="mt-8 mb-12">
                <a
                  href="#"
                  className="bg-gray-100  rounded-sm py-2 px-4 text-sm font-medium text-gray-600"
                >
                  Sign up to follow
                </a>
              </div>
              <h2 className="text-xl font-semibold uppercase mt-4">
                product name
              </h2>
              <div className="my-4">
                <p>
                  The `night sky` depicts a time of reflection and how all our
                  actions have consequences.
                </p>
                <p className="text-gray-400 mt-4">
                  #2d #3d #animated #animation #cartoon #future #illustration
                  #misang #mrmisang #psychedelic #scifi #SF #surreal
                </p>
              </div>
              <div className="flex">
                <button className="py-2 px-10 font-black uppercase rounded bg-appRed text-white mt-8">
                  Bid now
                </button>
                <p className="mt-8 ml-8 py-2">- 2ETH/$3000</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img src="https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0" className="h-3/4 w-3/4"/>
            </div>
          </div>
          <div className="pb-10 pt-40 border-b border-gray-400 border-opacity-20" />
          <div className="grid grid-cols-12 mt-8">
            <div className="col-span-12 relative">
              <Carousel
                renderButtonGroupOutside={true}
                arrows={false}
                customButtonGroup={<Navigation />}
                partialVisible={true}
                responsive={responsive}
                itemClass="px-2"
                className="mt-16"
              >
                <div className="mt-8">
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                  >
                    <Masonry gutter="20">{getCollections}</Masonry>
                  </ResponsiveMasonry>
                  {/* <div className="grid grid-cols-4 gap-4">{getCollections}</div> */}
                </div>
                <div className="mt-8">
                  <div className="grid grid-cols-4 gap-4">{getCreations}</div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
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
              Try it Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default Profile;
