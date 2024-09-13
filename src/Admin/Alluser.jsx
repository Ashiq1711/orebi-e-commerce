import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Alluser() {
  let [alluser, setAlluser] = useState([]);
  function Allusers() {
    axios.get("http://localhost:3000/api/v1/auth/allusers").then((data) => {
      setAlluser(data.data);
    });
  }
  useEffect(() => {
    Allusers();
  }, []);


  return (
    <div className=" px-4 w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-xl">
              User name
            </th>

            <th scope="col" className="px-6 py-3 text-xl">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-xl">
              Role
            </th>
          </tr>
        </thead>
{alluser.map((item)=>(

        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
             {item.name}
            </th>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4 capitalize">{item.role}</td>
          </tr>
        </tbody>
))}
      </table>
    </div>
  );
}

export default Alluser;
