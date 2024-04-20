import React, { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import Breadcrumb from "../components/Layout/Breadcrumb";
import ShopbyCategory from "../components/Layout/ShopbyCategory";
import ShopbyColor from "../components/Layout/ShopbyColor";
import ShopbyBrand from "../components/Layout/ShopbyBrand";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import Products from "../components/Layout/Products";
import Flex from "../components/Layout/Flex";
import axios from "axios";
function Product() {
  let [dummyProducts,setDummyProducts]=useState([])
  useEffect(()=>{
function getProducts(){
  axios.get('https://dummyjson.com/products').then((data)=>{
    setDummyProducts(data.data.products)
  })
}
getProducts()
  },[])
  return (
    <Container>
      <Breadcrumb />
      <div className="mt-[130px] flex gap-10">
        <div className=" w-[20%]">
          <ShopbyCategory />
          <ShopbyColor />
          <ShopbyBrand />
        </div>
        <div className=" w-[80%]">
          <div className="flex justify-between items-center">
            <div className=" flex items-center gap-4">
              <div className="p-3 border flex items-center justify-center bg-black text-white hover:bg-white hover:text-black hover:duration-300">
                <AiOutlineAppstore />
              </div>
              <div className="p-3 border flex items-center justify-center  hover:bg-white hover:text-black hover:duration-300">
                <AiOutlineBars />
              </div>
            </div>
            <div className=" flex gap-10">
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
                  className=" ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[140px] p-2.5 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                  id="countries"
                >
                  <option value="US">6</option>
                  <option value="CA">12</option>
                  <option value="FR">18</option>
                </select>
              </div>
            </div>
          </div>
          {/* ======================Products Start=================== */}  
          <Flex className=' flex-wrap '>
       {dummyProducts.map((pitem)=>(
        <div>

          <Products pInfo={pitem} pimage={pitem.thumbnail} isnew={true} />
        </div>

       ))}


          </Flex>
          {/* ======================Products End=================== */}
        </div>
      </div>
    </Container>
  );
}

export default Product;
