import axios from "axios";
import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
const ReviewModal = ({ onClose,productdetail }) => {
  const [message, setMessage] = useState();
  const [rating, setRating] = useState();

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  let handle_review = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/v1/review/createreview", {
      message,
      rating,
      product:productdetail._id,
      reviewBy:productdetail.ownerid,
    });
    onClose()
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className=" bg-black inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center fixed  z-50  w-full md:inset-0 "
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Write Review
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoClose />
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Review Message
                </label>
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Inter your name"
                  required="name is require"
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Review Rating
                </label>
                <input
                  onChange={(e) => setRating(e.target.value)}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Inter your rating"
                  required="name is require"
                />
              </div>

              <button
                onClick={handle_review}
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
