/* eslint-disable */
// import play from "../../assets/icons/play.svg";

function FeatureCardB(props) {
  const { title, heading1, heading2, artist, img } = props.card;
  return (
    <div>
      <div className="py-4">
        <p className="text-xs uppercase font-medium text-bordyColor dark:text-gray-100">
          {artist}
        </p>
        <h2 className="capitalize text-bordyColor dark:text-gray-100">
          {heading1}
        </h2>
        <div className="text-gray-500">{heading2}</div>
      </div>
      <div className="cursor-pointer h-special ">
        <div className="relative flex items-center h-full">
          <img
            src={img}
            alt="feature"
            className="rounded-md w-full object-cover h-full"
          />
          <div className="absolute w-full h-full  bg-opacity-70 z-10 bg-gradient-to-t from from-black"></div>
          <div className="absolute px-4 py-4 w-full h-full flex items-end justify-between text-sm text-gray-100 font-medium z-30">
            <p>{title}</p>
            {/* <button className="text-gray-100 w-8 h-8 ml-4 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 hover:bg-appRed duration-300 focus:outline-none">
              <img src={play} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCardB;
