import axios from "axios";
import React, { useEffect, useState } from "react";

function AllProducts() {
  const [getallProduct, setGetallProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/product/getallproduct")
      .then((data) => {
        setGetallProduct(data.data.allProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" px-4 w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-xl border">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 text-xl border">
              Descriptions
            </th>
            <th scope="col" className="px-6 py-3 text-xl border">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-xl border">
              selling price
            </th>

            <th scope="col" className="px-6 py-3 text-xl border">
              Image
            </th>
          </tr>
        </thead>

        <tbody>
          {getallProduct.map((item) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th className="px-6 py-4 border ">{item.name}</th>

              <th className="px-6 py-4 border">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description
                  }}
                ></div>
              </th>
              <th className="px-6 py-4 border">{item.price}</th>
              <th className="px-6 py-4 border">{item.sellingprice}</th>
              <th className="px-6 py-4 border">
                <div>
                  <img className="h-12 " src={item.image} alt="" />
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProducts;
