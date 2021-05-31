/* eslint-disable */
function Track(props) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
      {props.cards.map((item) => (
        <a href="#">
          <div className="flex justify-between text-sm border-t border-gray-200 border-opacity-60 dark:border-sideBar py-4">
            <div className="flex space-x-2">
              <div className="w-10 h-10">
                <img src={item.thumbnail} className="rounded-sm" alt="track" />
              </div>
              <div>
                <h3 className="capitalize text-bordyColor dark:text-gray-100">
                  {item.title}
                </h3>
                <h3 className="lowercase text-gray-500">{item.artist}</h3>
              </div>
            </div>
            <button className="text-appRed flex content-features focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
                />
              </svg>
            </button>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Track;
