import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import newImg from "../assets/img/new.jpg";
import MusicCard from "../components/cards/Music";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const ViewAll = () => {
  const trackList = [
    {
      id: 1,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
      link: "#",
    },
    {
      id: 2,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      link: "#",
    },
    {
      id: 3,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/KBPFHbreehLr7iQYTAeAmAoQqM4GwlRJk9O9x9bLpBy1uVqtJEZTTEXkJ2-0bClw1zvFAmEDhXHctKAdW8tp2LwpMSMSROsUlyjS1A=s0",
      link: "#",
    },
    {
      id: 4,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
      link: "#",
    },
    {
      id: 5,
      title: "Blue Woman Series",
      artist: "Ayoola -2ETH/$3000",
      thumbnail: newImg,
      link: "#",
    },
    {
      id: 6,
      title: "Blue Woman Series",
      artist: "Ayoola -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/SYy6eHKIOJF3y_-0dmyuRxwBAuKV4lt9dg_W2_QlqvGG4bDb67WVszlSY2Znhe7XlbwZg7d7OQ2EP1cqEFBWEXLn85AtRmi7HxzNuA=s0",
      link: "#",
    },

    {
      id: 7,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/PA-k72Ijyr6EVhOcT1XMSKfR3fLd24JaAQvXG8pTKzVsVBW2iFPv7TMg-6ZaRFZKbFsqgRfyTou44qAE-8J83fN3v8netgtb00bB=s0",
      link: "#",
    },
    {
      id: 1,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
      link: "#",
    },
    {
      id: 2,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      link: "#",
    },
    {
      id: 3,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/KBPFHbreehLr7iQYTAeAmAoQqM4GwlRJk9O9x9bLpBy1uVqtJEZTTEXkJ2-0bClw1zvFAmEDhXHctKAdW8tp2LwpMSMSROsUlyjS1A=s0",
      link: "#",
    },
    {
      id: 4,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
      link: "#",
    },
    {
      id: 5,
      title: "Blue Woman Series",
      artist: "Ayoola -2ETH/$3000",
      thumbnail: newImg,
      link: "#",
    },
    {
      id: 6,
      title: "Blue Woman Series",
      artist: "Ayoola -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/SYy6eHKIOJF3y_-0dmyuRxwBAuKV4lt9dg_W2_QlqvGG4bDb67WVszlSY2Znhe7XlbwZg7d7OQ2EP1cqEFBWEXLn85AtRmi7HxzNuA=s0",
      link: "#",
    },

    {
      id: 7,
      title: "Kissed by the sun",
      artist: "Dorgu -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/PA-k72Ijyr6EVhOcT1XMSKfR3fLd24JaAQvXG8pTKzVsVBW2iFPv7TMg-6ZaRFZKbFsqgRfyTou44qAE-8J83fN3v8netgtb00bB=s0",
      link: "#",
    },
    {
      id: 1,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
      link: "#",
    },
    {
      id: 2,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      link: "#",
    },
    {
      id: 3,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/KBPFHbreehLr7iQYTAeAmAoQqM4GwlRJk9O9x9bLpBy1uVqtJEZTTEXkJ2-0bClw1zvFAmEDhXHctKAdW8tp2LwpMSMSROsUlyjS1A=s0",
      link: "#",
    },
    {
      id: 4,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
      link: "#",
    },
    {
      id: 5,
      title: "Kaleidoscope Woman",
      artist: "IPneuma -2ETH/$3000",
      thumbnail: newImg,
      link: "#",
    },
    {
      id: 6,
      title: "Blue Woman Series",
      artist: "Ayoola -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/SYy6eHKIOJF3y_-0dmyuRxwBAuKV4lt9dg_W2_QlqvGG4bDb67WVszlSY2Znhe7XlbwZg7d7OQ2EP1cqEFBWEXLn85AtRmi7HxzNuA=s0",
      link: "#",
    },

    {
      id: 7,
      title: "Kissed by the sun",
      artist: "Dorgu -2ETH/$3000",
      thumbnail:
        "https://lh3.googleusercontent.com/PA-k72Ijyr6EVhOcT1XMSKfR3fLd24JaAQvXG8pTKzVsVBW2iFPv7TMg-6ZaRFZKbFsqgRfyTou44qAE-8J83fN3v8netgtb00bB=s0",
      link: "#",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const tracks = trackList.map((card) => {
    return <MusicCard key={card.id} card={card} />;
  });
  return (
      <div>
          <Link to="/">
          <a
        className="py-2 bg-gray-700 w-full h-10 fixed z-50 bg-opacity-90"
        alt="#"
        href="#"
      >
        <div className="bg-gray-400 ml-3 bg-gray-600 w-6 h-6 rounded">
          <NavigateBeforeIcon style={{ color: "#fff" }} />
        </div>
      </a>
          </Link>
      <div className="px-10">
        <hr className="border border-gray-200 opacity-60 dark:border-sideBar" />
        <div>
          <div className="flex justify-between items-center mt-16">
            <h2 className="text-xl capitalize font-black text-bordyColor dark:text-gray-100">
              new week, new goals
            </h2>
          </div>
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>{" "}
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>{" "}
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>{" "}
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>{" "}
          <Carousel
            arrows={false}
            partialVisible={true}
            responsive={responsive}
            itemClass="px-2"
            className="mt-8"
          >
            {tracks}
          </Carousel>
        </div>
      </div>
      <div className="box fixed bottom-0 left-0 w-full z-50">
        <div className="items-center h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ... py-4 px-4 sm:flex space-y-4 sm:space-y-0 text-gray-100">
          <button className="mb-8">x</button>
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
      </div>
      <Footer />
    </div>
  );
};

export default ViewAll;
