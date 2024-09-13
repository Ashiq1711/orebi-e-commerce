import React, { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import Breadcrumb from "../components/Layout/Breadcrumb";
import ShopbyCategory from "../components/Layout/ShopbyCategory";
import ShopbyColor from "../components/Layout/ShopbyColor";
import ShopbyBrand from "../components/Layout/ShopbyBrand";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import axios from "axios";
import Pagination from "../components/Layout/Pagination";
import ShopbyPrice from "../components/Layout/ShopbyPrice";
function Product() {
  let [dummyProducts, setDummyProducts] = useState([]);
  useEffect(() => {
    function getProducts() {
      axios
        .get("http://localhost:3000/api/v1/product/getallproduct")
        .then((data) => {
          setDummyProducts(data.data.allProduct);
        });
    }
    getProducts();
  }, []);

  const [perPage, setPerPage] = useState(6);
  let handle_per_page = (e) => {
    setPerPage(e.target.value);
  };
  return (
    <Container>
      <Breadcrumb />
      <div className="mt-[130px] flex flex-wrap md:flex-nowrap gap-10">
        <div className="  w-full px-3 md:px-0 md:w-[20%]">
          <ShopbyCategory />
          <ShopbyColor />
          <ShopbyBrand />
          <ShopbyPrice />
        </div>
        {/* <button className=" px-6 py-2 border">Filter</button> */}
        <div className=" w-full px-3 md:px-0 md:w-[80%]">
          <div className=" flex-wrap md:flex-nowrap px-3 md:px-0 flex justify-between items-center">
            <div className=" flex items-center gap-4">
              <div className="p-3 border flex items-center justify-center bg-black text-white hover:bg-white hover:text-black hover:duration-300">
                <AiOutlineAppstore />
              </div>
              <div className="p-3 border flex items-center justify-center  hover:bg-white hover:text-black hover:duration-300">
                <AiOutlineBars />
              </div>
            </div>
            <div className="mt-5 md:mt-0 flex-wrap md:flex-nowrap flex gap-5 md:gap-10">
              <div className=" flex items-center ">
                <label
                  className="block whitespace-nowrap  text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="countries"
                >
                  Sort by:
                </label>
                <select
                  className="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-[240px] p-2.5 dark:bg-gray-700 
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                  id="countries"
                >
                  <option value="CA">Featured</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className=" flex items-center ">
                <label
                  className="block whitespace-nowrap  text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="countries"
                >
                  Show:
                </label>
                <select
                  onChange={handle_per_page}
                  className=" ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[140px] p-2.5 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                  id="countries"
                >
                  <option value={6}>6</option>
                  <option value={12}>12</option>
                  <option value={18}>18</option>
                </select>
              </div>
            </div>
          </div>
          {/* ======================Products Start=================== */}
          <Pagination itemsPerPage={perPage} allProducts={dummyProducts&& dummyProducts} />

        </div>
      </div>
    </Container>
  );
}

export default Product;
