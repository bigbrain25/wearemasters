/* eslint-disable */

import heroImg from "../assets/img/hero.png";
function Hero(props) {
  const { title, subHeading, price, type } = props.hero;
  return (
    <div className="grid sm:grid-cols-2 gap-12 items-center relative">
      <div className="absolute left-0 z-10 top-0 text-gray-700">
        <svg>
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="364"
            height="384"
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
      <div className="flex flex-col order-last sm:order-first items-baseline justify-start sm:space-y-10 space-y-4 relative z-20 text-bordyColor dark:text-gray-100">
        <h2 className="text-3xl xl:text-5xl uppercase font-normal xl:leading-extraLoose">
          {title}
        </h2>
        <div className="flex flex-col sm:space-y-8 space-y-6">
          <h3 className="text-2xl font-bold">{subHeading}</h3>
          <div className="flex space-x-8 items-center">
            <a
              href="#"
              className="text-base xl:text-lg uppercase whitespace-nowrap font-medium py-3 xl:py-4 px-6 xl:px-12 rounded-full text-gray-100 bg-appRed"
            >
              BID NOW
            </a>
            <div>
              <h3 className="text-xl sm:text-3xl font-bold">{price}</h3>
              <p>{type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 ">
        <img src={heroImg} alt="hero" className="max-w-full" />
      </div>
    </div>
  );
}

export default Hero;
