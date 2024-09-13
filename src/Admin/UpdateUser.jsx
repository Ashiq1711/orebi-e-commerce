import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import EditUpdate_Modal from "./EditUpdate_Modal";
import EditRoleModal from "./EditRoleModal";
function UpdateUser() {
  let [alluser, setAlluser] = useState([]);
  let [editModal, setEditModal] = useState(false);
  let [role_EditModal, setRole_EditModal] = useState(false);
  let [emailprops, setEmailprops] = useState();
  function Allusers() {
    axios.get("http://localhost:3000/api/v1/auth/allusers").then((data) => {
      setAlluser(data.data);
    });
  }
  useEffect(() => {
    Allusers();
  }, [alluser]);
  const closeModal = () => {
    setEditModal(false);
    setRole_EditModal(false)
  };

  let handle_edit_modal = (email) => {
    //  console.log(email)
    setEditModal(!editModal);
    setEmailprops(email);
  };
  let handle_edit_role = (email) => {
    setRole_EditModal(!role_EditModal);
    setEmailprops(email);
    
  };
  return (
    <div className=" px-4 w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-xl border">
              User name
            </th>

            <th scope="col" className="px-6 py-3 text-xl border">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-xl border">
              Role
            </th>
          </tr>
        </thead>
        {alluser.map((item) => (
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 border items-center  text-gray-900 font-bold whitespace-nowrap flex justify-between"
              >
                {item.name}

                <button
                  onClick={() => handle_edit_modal(item.email)}
                  type="button"
                  class="text-white flex items-center gap-3 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  <CiEdit className=" text-xl" />
                  Edit
                </button>
                {editModal && (
                  <EditUpdate_Modal
                    closeModal={closeModal}
                    email={emailprops}
                  />
                )}
              </th>
              <td className="px-6 py-4 border">{item.email}</td>
              <td className="px-6 text-black font-bold py-4 capitalize  flex justify-between items-center">
                {item.role}
                <div>
                  <button 
                  onClick={()=>handle_edit_role(item.email)}
                    type="button"
                    class="text-white flex items-center gap-3 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                  >
                    <CiEdit className=" text-xl" />
                    Edit Role
                  </button>
                  {role_EditModal && 
                  <EditRoleModal  closeModal={closeModal}
                  email={emailprops}/>
                  }
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default UpdateUser;
