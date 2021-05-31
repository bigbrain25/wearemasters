import React from "react";
import category from "../assets/img/category.jpg";

const Onhover = () => {
  return (
    <div>
      <div className="overlay h-28 m-32 border border-elr-green border-opacity-30 rounded-md">
        {/* <img
          src={category}
          alt="burna"
          className="overlay h-28 m-32 border border-elr-green border-opacity-30 rounded-md"
        /> */}
        <div className="overlay-first-elem bg-elr-white-400 opacity-90 rounded-md text-center transform translate-x-0 translate-y-10">
          yes please
        </div>
        <div className="overlay-second-elem flex ml-3 md:ml-5 mt-5 mr-1.5">
          hey
        </div>
      </div>
    </div>
  );
};

export default Onhover;
