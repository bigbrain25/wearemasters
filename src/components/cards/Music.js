/* eslint-disable */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import play from "../../assets/icons/play.svg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Music(props) {
  const { title, artist, thumbnail, eth, pricing, price } = props.card;
  return (
    <div className="cursor-pointer">
      <div className="relative flex h-track">
        <img
          src={thumbnail}
          alt="feature"
          className="rounded-md w-full object-cover"
        />
        <div className="absolute px-4 py-4 w-full h-full flex items-end text-sm text-gray-100 font-medium justify-end">
          {/* <button className="text-gray-100 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 hover:appRed duration-300 focus:outline-none">
            <img src={play} />
          </button> */}
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="text-gray-100 w-6 h-6 rounded-full bg-grey-400 flex items-center justify-center flex-shrink-0 hover:appRed duration-300 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute z-50 right-0 mt-2 w-44 rounded-md shadow-lg bg-white bg-opacity-60 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-black font-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Share To Twitter
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-black font-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Share To Instagram
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-black font-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Share To Facebook
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          {/* <button className="text-gray-100 w-8 h-8 rounded-full bg-appRed flex items-center justify-center flex-shrink-0 hover:appRed duration-300 focus:outline-none">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
              />
            </svg>
          </button> */}
        </div>
      </div>
      <div className="flex justify-between flex-wrap text-bordyColor dark:text-gray-100">
        <a href="#" className="flex flex-col capitalize text-sm my-2">
          <p>{title}</p>
          <div className="flex justify-between">
            <p>{artist}</p>
            <p className="ml-24">{price}</p>
          </div>
        </a>
        <div className="text-xs my-2 uppercase">
          <p className="">{eth}</p>
          <p>{pricing}</p>
        </div>
      </div>
    </div>
  );
}

export default Music;
