import axios from "axios";
import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

function EditRoleModal({ closeModal, email }) {
    let modalRef=useRef()
  let closeModalFunction=(e)=>{
if(modalRef.current===e.target){
    closeModal()
}
  }
  let [value, setValue] = useState();
  let handle_change_role = (e) => {
    setValue(e.target.value);
  };
  let handle_update_role_submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/auth/updateuser", {
        email: email,
        role: value,
      })
      .then(() => {
        closeModal();
      });
  };

  return (
    <div 
    ref={modalRef}
    onClick={closeModalFunction}
    className=" bg-black inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center fixed  z-50  w-full md:inset-0 ">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Update Role
            </h3>
            <button
              onClick={closeModal}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoMdClose />
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <select
                onChange={handle_change_role}
                id="role"
                className="bg-gray-50 border mb-8 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Choose activity</option>
                <option  value="admin">Admin</option>
                <option  value="marchant">Marchant</option>
                <option  value="member">Member</option>
              </select>

              <button
                onClick={handle_update_role_submit}
                type="submit"
                className="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRoleModal;
