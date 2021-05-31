/* eslint-disable */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newImg from "../assets/img/new.jpg";
import fOne from "../assets/img/special/1.gif";
import fTwo from "../assets/img/special/2.gif";
import fThree from "../assets/img/special/3.gif";
// components
import FeatureCard from "../components/cards/Feature";
import FeatureCardB from "../components/cards/FeatureB";
import MusicCard from "../components/cards/Music";
import RadioCard from "../components/cards/Radio";
import SpecialCard from "../components/cards/Special";
import Hero from "../components/Hero";
import Track from "../components/Track";

function Content() {
  const featureList = [
    {
      id: 1,
      artist: "Night Sky By",
      heading1: "Iconicevol",
      heading2: "BID - 0.11 ETH ($455.12)",
      title:
        "The `night sky` depicts a time of reflection and how all our actions have consequences.",
      img: fOne,
      link: "#",
    },
    {
      id: 2,
      artist: "King Jean By",
      heading1: "Aradeinde",
      heading2: "BID - 1.75 ETH ($7,256.95)",
      title: "Explore the rich, vibrant sounds from across the continent.",
      img: fTwo,
      link: "#",
    },
    {
      id: 3,
      artist: "Verstappen in Color By",
      heading1: "Osikhena x Simisola",
      heading2: "BID - 1.75 ETH ($7,256.95)",
      title: "Bensoul gets wrapped up in the thrill of the honeymoon phase.",
      img: fThree,
      link: "#",
    },
  ];
  const trackList = [
    {
      id: 1,
      title: "Kaleidoscope Woman by",
      artist: "IPneuma",
      thumbnail:
        "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
      link: "#",
    },
    {
      id: 2,
      title: "Kaleidoscope Woman by",
      artist: "IPneuma",
      thumbnail:
        "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      link: "#",
    },
    {
      id: 3,
      title: "Kaleidoscope Woman by",
      artist: "IPneuma",
      thumbnail:
        "https://lh3.googleusercontent.com/KBPFHbreehLr7iQYTAeAmAoQqM4GwlRJk9O9x9bLpBy1uVqtJEZTTEXkJ2-0bClw1zvFAmEDhXHctKAdW8tp2LwpMSMSROsUlyjS1A=s0",
      link: "#",
    },
    {
      id: 4,
      title: "Kaleidoscope Woman by",
      artist: "IPneuma",
      thumbnail:
        "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
      link: "#",
    },
    {
      id: 5,
      title: "worship today",
      artist: "Apple Music gospel",
      thumbnail: newImg,
      link: "#",
    },
    {
      id: 6,
      title: "Blue Woman Series by",
      artist: "Ayoola",
      thumbnail:
        "https://lh3.googleusercontent.com/SYy6eHKIOJF3y_-0dmyuRxwBAuKV4lt9dg_W2_QlqvGG4bDb67WVszlSY2Znhe7XlbwZg7d7OQ2EP1cqEFBWEXLn85AtRmi7HxzNuA=s0",
      link: "#",
    },

    {
      id: 7,
      title: "Kissed by the sun by",
      artist: "Dorgu",
      thumbnail:
        "https://lh3.googleusercontent.com/PA-k72Ijyr6EVhOcT1XMSKfR3fLd24JaAQvXG8pTKzVsVBW2iFPv7TMg-6ZaRFZKbFsqgRfyTou44qAE-8J83fN3v8netgtb00bB=s0",
      link: "#",
    },
  ];

  const artistList = [
    {
      id: 1,
      artist: "mrmisang",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmTmytwKogPqvoUrtnX2vHdcZA2stNirbNk7BBu3AAs4Rt/facebook.gif",
      link: "artist",
    },
    {
      id: 2,
      artist: "annadreambrush",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmdzWRYb8QpsASXuGKW3QgU8JWeU35iQoMCNGxEMjndBZB/profile-300.gif",
      link: "artist",
    },
    {
      id: 3,
      artist: "giovannimotta",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmVk6XdyASigysct5H5zdcxNQBTgP7jMLARiHJXDe2EdJD/jb.gif",
      link: "artist",
    },
    {
      id: 4,
      artist: "Killercid",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmP7nRMbPt6hNLm4PE5mwLjPmE2WZquRYso7e3AVRFyyFR/KillerAcidMouth.gif",
      link: "artist",
    },
    {
      id: 5,
      artist: "opheliafu",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmY8jYdqQHrJ2fGaDwwgpmKHEkGV6yt6HM3JnD6TxLEfih",
      link: "artist",
    },
    {
      id: 6,
      artist: "frenetikvoid",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmXJVH1ftXkhYafvkY1sp5iJPEMMV5ydwSgcn7rrnebDye/icon.jpg",
      link: "artist",
    },
    {
      id: 7,
      artist: "federicoclapis",
      thumbnail:
        "https://ipfs.pixura.io/ipfs/QmfLyf2JYovKQRsBMHGE6Pt5tNMKjyUYoqMLZ9KGsu9VLQ/foro%20profilo%20media%20risoluzi.jpg",
      link: "artist",
    },
  ];

  const tracksGrid = [
    {
      id: 1,
      title: "Meetbits",
      artist: "Apple Music African",
      thumbnail:
        "https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s64",
      link: "#",
    },
    {
      id: 2,
      title: "Zed Run",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s64",
      link: "#",
    },
    {
      id: 3,
      title: "crypto punk",
      artist: "Apple Music African",
      thumbnail:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
      link: "#",
    },
    {
      id: 4,
      title: "Noora Health",
      artist: "Apple Music African",
      thumbnail:
        "https://lh3.googleusercontent.com/p6uV0RJZwJb9hcEDOg2VUzw8pr5ZRd62y-VLe7nld5j6yGfJmsUeWugg1RBbEcC84khGArqMX3BwWp6vFa5FjpmUF5pIu6fliNf2=s64",
      link: "#",
    },
    {
      id: 5,
      title: "Rarible",
      artist: "Apple Music African",
      thumbnail:
        "https://lh3.googleusercontent.com/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw=s64",
      link: "#",
    },
    {
      id: 6,
      title: "Bored Ape Yacht Club",
      artist: "Apple Music African",
      thumbnail:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s64",
      link: "#",
    },
    {
      id: 7,
      title: "Sorare",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/gj47nmAR3valkmpVbwamiuTJfWEWSCyVeORdjM6DRWrZ1o8WaqBxFXmpBrzZnGoWaPwq1Y0jiXRrBLbnLcawAp92=s64",
      link: "#",
    },
    {
      id: 8,
      title: "VoxoDeux Minter",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/ZTBjAOy61poNh1htSHJ-BeokMpvbui7DdUUMIVk1OI1MtcpGN6sG_oHs38r3AF1JO1l-AxVQZ-aam_h43Dr0XZZC2jblvNYUmZLyTkw=s64",
      link: "#",
    },
    {
      id: 9,
      title: "Decentraland",
      artist: "Apple Music gospel",
      thumbnail: newImg,
      link:
        "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s64",
    },
    {
      id: 10,
      title: "Apymon",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/8OogKrYF_3kTL3w_8J_TwEWTn6E4OS_SP5EVdeAJnw7GycEJJy36uZYkLKoMnrX-ObWNYlMpEIu5fGoRMtJrkL8HRnVz4gY8jrD2Cw=s64",
      link: "#",
    },
    {
      id: 11,
      title: "Makers Place",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/KgKgvjxO8YUDbr747VRfmAEqhvjP8GzNIC23UMheTkzUQ1JmOK07FQ6BhlfBOtrKG_Jm7NoasA6PVch_0Ujf55mp=s64",
      link: "#",
    },
    {
      id: 12,
      title: "Art Blocks Curated",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/ClKm5VUVeA_XuEvxx_jaDyCodqLqQcSNI6Cjk1S_b6YAMK6kLp8t4175jvmb9lQMiv9mWVFcbh4XksrhnHYqwoPD2tOxmVNK6Qn6=s64",
      link: "#",
    },
    {
      id: 13,
      title: "Cryptovoxels",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/Jy6UrKMSi0e9w9jYtC1ON-4tOVXA1mXLk7XCLxvWEDuXeLFExJSYnw2DLAGtP3Ly98WJbrrFm6xEodcrpGnKB2tF=s64",
      link: "#",
    },
    {
      id: 14,
      title: "Somnium space VR",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/mzUNo5vk95qQfpAbXir0_6oJmZlyqnq_ix3BIjmfeVGrFPoxeAqf-vYHMvh115bSdJGxRtgGTWKldOzdJQGtEqGW=s64",
      link: "#",
    },
    {
      id: 15,
      title: "Ghxsts",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/uVziXd8Q64_zvofgrKFp5SmrcObngHoVWZMJQOHAZ3bdERsO4GaYvQcuGsz0ofr8zy8iajJdNQHCwFkSdBmkVy_osTPvoAuQFv489g=s64",
      link: "#",
    },
    {
      id: 16,
      title: "The Sandbox",
      artist: "Apple Music gospel",
      thumbnail:
        "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
      link: "#",
    },
  ];
  let specialList = [
    {
      id: 1,
      title: "Bensoul gets wrapped",
      subHeading: "the honeymoon phase",
      img: fOne,
      link: "#",
    },
    {
      id: 2,
      title: "Explore the rich",
      subHeading: "the honeymoon phase",
      img: fTwo,
      link: "#",
    },
    {
      id: 3,
      title: "Bensoul gets wrapped",
      subHeading: "the honeymoon phase",
      img: fThree,
      link: "#",
    },
  ];
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group absolute w-full flex items-center">
        <button
          className={
            currentSlide === 0
              ? "hidden"
              : "absolute text-white left-0 bg-gray-700 duration-150 bg-opacity-70 focus:outline-none hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center"
          }
          onClick={() => previous()}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
            />
          </svg>
        </button>
        <button
          className={
            currentSlide === trackList.length - 5
              ? "hidden"
              : "absolute text-white right-0 bg-gray-700 duration-150 bg-opacity-70 focus:outline-none hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center"
          }
          onClick={() => next()}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
            />
            {currentSlide}
          </svg>
        </button>
      </div>
    );
  };
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

  const heroResponsive = {
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

  const heroes = [
    {
      title: "NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS",
      subHeading: "80/90s",
      price: "ETH 23",
      type: "XD/20-93",
    },
    {
      title: "IPSAM VOLUPTATEM NEMO ENIM QUIA VOLUPTAS",
      subHeading: "80/90s",
      price: "ETH 19.99",
      type: "XD/20-93",
    },
  ];

  const features = featureList.map((card) => {
    return <FeatureCard key={card.id} card={card} />;
  });
  const featuresB = featureList.map((card) => {
    return <FeatureCardB key={card.id} card={card} />;
  });
  const tracks = trackList.map((card) => {
    return <MusicCard key={card.id} card={card} />;
  });
  const featureCreation = trackList.map((card) => {
    return (
      <div>
        <MusicCard key={card.id} card={card} />{" "}
        <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
        <MusicCard key={card.id} card={card} />
      </div>
    );
  });
  const special = specialList.map((card) => {
    return <SpecialCard key={card.id} card={card} />;
  });
  const radioTracks = artistList.map((card) => {
    return <RadioCard key={card.id} card={card} />;
  });
  const getHeroes = heroes.map((hero) => {
    return <Hero key={hero.title} hero={hero} />;
  });
  const gridTracks = <Track cards={tracksGrid} />;
  return (
    <div className="max-w-7xl sm:mx-8 mx-auto text-gray-50 pb-24">
      <div className="h-full">
        <Carousel
          arrows={false}
          showDots={true}
          autoPlay={true}
          infinite={true}
          transitionDuration={500}
          partialVisible={true}
          responsive={heroResponsive}
          itemClass="px-2"
          className="mt-8 pb-8"
        >
          {getHeroes}
        </Carousel>
      </div>
      <div>
        {/* <h2 className="text-3xl font-bold capitalize text-bordyColor dark:text-gray-100">
          browse Top Drop
        </h2> */}
        <hr className="mt-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6 items-end">
        {featuresB}
      </div>
      <hr className="my-8 border border-gray-200 opacity-60 dark:border-sideBar" />
      {/* <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            Featured Creations
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
          className="mt-8"
        >
          {tracks}
        </Carousel>
      </div>
      <hr className="my-8 border border-gray-200 opacity-60 dark:border-sideBar" /> */}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            Featured Creation
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
          className="mt-8"
        >
          {featureCreation}
        </Carousel>
      </div>
      <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div>
        <br></br>
        <div className="grid md:grid-cols-12 gap-8 text-bordyColor dark:text-gray-100">
          <div className="xl:col-span-2 md:col-span-3 col-span-12">
            <img
              src="https://ipfs.pixura.io/ipfs/QmTmytwKogPqvoUrtnX2vHdcZA2stNirbNk7BBu3AAs4Rt/facebook.gif"
              className="mx-auto"
            />
          </div>
          <div className="xl:col-span-10 md:col-span-9 col-span-12 space-y-8 md:px-0 px-4">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4 col-span-12 text-center space-y-2">
                <h3 className="text-lg capitalize font-semibold">discover</h3>
                <p className="text-sm">
                  Omnis porro, dolore consectetur, et libero laborum delectus
                  voluptatum eos illum itaque molestiae. Omnis porro, dolore
                  consectetur, et libero laborum delectus voluptatum eos illum
                  itaque molestiae
                </p>
              </div>
              <div className="md:col-span-4 col-span-12 text-center space-y-2">
                <h3 className="text-lg capitalize font-semibold">discover</h3>
                <p className="text-sm">
                  Omnis porro, dolore consectetur, et libero laborum delectus
                  voluptatum eos illum itaque molestiae. Omnis porro, dolore
                  consectetur, et libero laborum delectus voluptatum eos illum
                  itaque molestiae
                </p>
              </div>
              <div className="md:col-span-4 col-span-12 text-center space-y-2">
                <h3 className="text-lg capitalize font-semibold">discover</h3>
                <p className="text-sm">
                  Omnis porro, dolore consectetur, et libero laborum delectus
                  voluptatum eos illum itaque molestiae. Omnis porro, dolore
                  consectetur, et libero laborum delectus voluptatum eos illum
                  itaque molestiae
                </p>
              </div>
            </div>
            <div className="text-center">
              <button className="py-3 px-10 bg-appRed rounded-full uppercase text-white text-sm font-medium">
                enter marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            MBPR Agency
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
          className="mt-8"
        >
          {featureCreation}
        </Carousel>
      </div>
      <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            Upcoming Hot Drops
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-4 items-end">
          {special}
        </div>
      </div>
      <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div className="mt-12 grid lg:grid-cols-3 gap-6 items-end">
        {features}
      </div>
      <hr className="my-8 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            featured artists
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
          className="mt-8"
        >
          {radioTracks}
        </Carousel>
      </div>
      <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            new week, new goals
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
          className="mt-8"
        >
          {tracks}
        </Carousel>
      </div>
      <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            Collections
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        {gridTracks}
      </div>

      {/* <hr className="my-4 border border-gray-200 opacity-60 dark:border-sideBar" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            Top selling artists
          </h2>
          <a href="#" className="capitalize text-appRed flex items-center">
            view all
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        </div>
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
          className="mt-8"
        >
          {radioTracks}
        </Carousel>
      </div> */}
      {/* <div className="mt-12">
        <div className="mb-8">
          <h2 className="text-xl capitalize font-medium text-bordyColor dark:text-gray-100">
            browse
          </h2>
        </div>
        <Explore />
      </div> */}
    </div>
  );
}

export default Content;
