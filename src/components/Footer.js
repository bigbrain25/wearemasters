import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IconContext } from "react-icons";
import newlogo from "../assets/img/newlogo.png";


/* eslint-disable */

function Footer() {
  return (
    <footer className="bg-footer text-white px-20">
      <IconContext.Provider value={{ size: "25px" }}>
        <div className="flex h-28">
          <img src={newlogo} className="relative top-10" alt="logo" />
          <div className="border-l h-44 border-gray-400 border-opacity-40 mt-4 ml-28" />
          <div className="w-80 mx-6">
            <p className="text-gray-400 text-sm mt-20">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, sell, and discover exclusive digital assets.
            </p>
          </div>
        </div>
        <div className="-mt-8">
          <div className="flex flex-row-reverse">
            <TiSocialInstagram />
            <TiSocialFacebook />
            <TiSocialTwitter />
          </div>
          <div className="mt-2 text-gray-400 text-sm flex flex-row-reverse">
            hello@wearemasters.io
          </div>
        </div>
        <div className="mt-16 pt-4 border-b border-gray-400 border-opacity-20" />
        <div className="text-gray-400 mt-4 flex justify-between">
          <p className="text-gray-400 text-sm mt-2">
            Copyright © 2021
            <a href="https://www.apple.com/uk/" target="_blank" rel="noopener">
              WEAREMASTERS.IO
            </a>
            All Rights Reserved.
          </p>
        </div>
      </IconContext.Provider>
    </footer>
  );
}

export default Footer;
