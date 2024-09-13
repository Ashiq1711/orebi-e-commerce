import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
function UpdateCategory() {
  let userdata = useSelector((state) => state.userinfo.value);
  let [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    let getAllcategoty = () => {
      axios
        .get("http://localhost:3000/api/v1/category/getallcategory")
        .then((data) => {
          setAllCategory(data.data);
          // console.log(allCategory.isActive)
        });
    };
    getAllcategoty();
  }, [allCategory]);

  let handle_select = (e, item) => {
    axios
      .post("http://localhost:3000/api/v1/category/categoryapprove", {
        userEmail: userdata.email,
        email: item.email,
        isActive: e.target.value,
        category: item._id,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let handle_delete = (item) => {
    // console.log(item)
    axios
      .post("http://localhost:3000/api/v1/category/categorydelete", {
        email: userdata.email,
        category: item._id,
      })
      .then((data) => {
        toast.success("Delete successfully");
        console.log(data);
      });
  };
  return (
    <div className=" px-4 w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <Toaster position="bottom-center" reverseOrder={false} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-xl border">
              User name
            </th>
            <th scope="col" className="px-6 py-3 text-xl border">
              Descriptions
            </th>

            <th scope="col" className="px-6 py-3 text-xl border">
              Is Active
            </th>
          </tr>
        </thead>

        <tbody>
          {allCategory.map((item) => (
            <tr className="border-b border-[2px]">
              <th
                scope="row"
                className="px-6 py-4 border-l items-center  text-gray-900 font-bold  "
              >
                {item.name}
              </th>

              <th className="px-6 py-4 border">{item.description}</th>
              <th className="px-6 py-4 border flex justify-between items-center">
                {item.isActive}
                <div>
                  <select
                    onChange={(e) => handle_select(e, item)}
                    id="countries"
                    className="bg-gray-50 border w-34 h-11 border-gray-300 text-gray-900 text-sm rounded-lg "
                  >
                    <option selected="">Choose activity</option>
                    <option value="true">Active</option>
                    <option value="">Inactive</option>
                  </select>
                  <button
                    onClick={() => handle_delete(item)}
                    className="btn btn-error ml-4"
                  >
                    <MdDelete />
                    Delete
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateCategory;

// import React from 'react'

// function UpdateCategory() {
//   return (
//     <div className=" w-full relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
//       <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
//         <tr>
//           <th scope="col" className="px-6 py-3">
//             Product name
//           </th>
//           <th scope="col" className="px-6 py-3">
//             Color
//           </th>
//           <th scope="col" className="px-6 py-3">
//             Category
//           </th>
//           <th scope="col" className="px-6 py-3">
//             Price
//           </th>
//           <th scope="col" className="px-6 py-3">
//             Action
//           </th>
//         </tr>
//       </thead>
//       <tbody>

//         <tr className="bg-blue-600 border-blue-400 hover:bg-blue-500">
//           <th
//             scope="row"
//             className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
//           >
//             Apple Watch 5
//           </th>
//           <td className="px-6 py-4">Red</td>
//           <td className="px-6 py-4">Wearables</td>
//           <td className="px-6 py-4">$999</td>
//           <td className="px-6 py-4">
//             <a href="#" className="font-medium text-white hover:underline">
//               Edit
//             </a>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>

//   )
// }

// export default UpdateCategory
