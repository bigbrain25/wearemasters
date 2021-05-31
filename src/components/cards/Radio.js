/* eslint-disable */
function Radio(props) {
  const { artist, thumbnail } = props.card;
  return (
    <div className="cursor-pointer">
      <div className="relative flex h-track lg:h-radio">
        <img
          src={thumbnail}
          alt="feature"
          className="rounded-md w-full object-cover"
        />
        <div className="absolute px-4 py-4 w-full h-full flex items-end text-sm text-white font-medium justify-between"></div>
      </div>
      <a
        href="/artist"
        className="flex flex-col mt-2 text-sm capitalize text-bordyColor dark:text-gray-100"
      >
        <p>{artist}</p>
      </a>
    </div>
  );
}

export default Radio;
