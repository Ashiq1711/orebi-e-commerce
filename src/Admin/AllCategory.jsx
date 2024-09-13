import axios, { all } from "axios";
import React, { useEffect, useState } from "react";

function AllCategory() {
  let [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    let getAllcategoty = () => {
      axios
        .get("http://localhost:3000/api/v1/category/getallcategory")
        .then((data) => {
          setAllCategory(data.data);
         
        });
    };
    getAllcategoty();
  }, []);
  return (
    <div className=" px-4 w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 border items-center  text-gray-900 font-bold whitespace-nowrap flex justify-between"
              >
                {item.name}
              </th>
        
              <th className="px-6 py-4 border">
                {item.description}
              </th>
              <th className="px-6 py-4 border">
                {item.isActive}
              
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllCategory;
