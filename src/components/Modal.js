// import React from "react";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "335px",
//     borderRadius: "15px",
//   },
// };

// Modal.setAppElement("#root");

// export const Popup = ({ children }) => {
//   const [isOpen, setIsOpen] = React.useState(false);
// //   //   const isOpen = () => {
// //   //     setIsOpen(true);
// //   //   };
//   const onClose = () => {
//     setIsOpen(false);
//   };
//   isOpen ? (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={customStyles}
//       className="top-2/4 right-auto bottom-auto left-2/4 -mr-2 absolute bg-white overflow-auto outline-none rounded-md px-7 md:px-10 transform translate-x-1/2 translate-y-1/2 md:w-4/5 overscroll-auto h-4/5"
//       overlayClassName="bg-elr-black bg-opacity-60 fixed inset-0"
//     >
//       <div
//         className="cursor-pointer text-right mt-2 text-elr-black font-bold rounded w-50"
//         onClick={onClose}
//       >
//         X
//       </div>
//       {children}
//     </Modal>
//   ) : null;
// };
