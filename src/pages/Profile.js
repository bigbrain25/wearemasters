/* eslint-disable */
import React from "react";
import Carousel from "react-multi-carousel";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import artist from "../assets/img/artis.gif";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Profile() {
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
        {" "}
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
      <SideBar />
      <div className="lg:ml-72 relative pb-24">
        <div className="flex justify-end py-6 px-8">
          <Link
            to="/login"
            className="uppercase py-2 px-6 text-sm font-medium   rounded-full text-white bg-appRed"
          >
            sign in
          </Link>
        </div>
        <div className="max-w-7xl mx-auto text-bordyColor dark:text-gray-100 py-16 relative lg:px-8 px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-8 lg:col-span-5">
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
              <p className="uppercase">$3000</p>
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
              <div>
                <button className="py-2 px-10 uppercase rounded-full bg-appRed text-white mt-8">
                  bid now
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img src="https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0" />
            </div>
          </div>
          <div className="grid grid-cols-12 mt-12">
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
              <button className="bg-gray-100 font-medium px-12 capitalize py-2 text-gray-600 focus:outline-none rounded-full">
                try it now
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
