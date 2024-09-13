import React, { useEffect, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function Products({ pimage, isnew, pInfo }) {
  console.log(pInfo);

  return (
    <section className=" mt-12">
      <Container>
        <Flex className="px-4 md:px-0">
 
          <div className=" relative ">

            <div className=" relative group">
              <Link to={`/productdetail/${pInfo && pInfo._id}`}>
                <img
                  className=" h-[378px] w-[388px] object-cover"
                  src={pInfo && pimage}
                  alt="p1"
                />
              </Link>

              <div className="  hidden group-hover:block absolute w-full left-0 bottom-0 bg-slate-300 bg-opacity-80 h-[156px] p-5">
                <ul className="flex items-center justify-end gap-3 pb-3 ">
                  <li className=" font-dmsans font-normal text-base text-color_2 hover:text-color_1 hover:font-semibold">
                    Add to Wish List
                  </li>
                  <FaHeart />
                </ul>
                <ul className="flex items-center justify-end gap-3 pb-3 ">
                  <li className=" font-dmsans font-normal text-base text-color_2 hover:text-color_1 hover:font-bold">
                    Compare
                  </li>
                  <IoReloadCircle />
                </ul>
                <ul className="flex items-center justify-end gap-3 pb-3 ">
                  <li className=" font-dmsans font-normal text-base text-color_2 hover:text-color_1 hover:font-bold">
                    Add to Cart
                  </li>
                  <FaShoppingCart />
                </ul>
              </div>
            </div>
            {isnew && (
              <p className=" absolute top-2 left-2 inline-block font-bold font-dmsans px-8 py-2 bg-color_1  text-white">
                Stock {pInfo ? pInfo.stock : "0"}
              </p>
            )}
            <Flex className="mt-6 mb-2">
              <h2 className="font-bold font-dmsans  text-color_1">
                {pInfo ? `${pInfo.name.slice(0, 20)}...` : "Basic Crew Neck Tee"}
              </h2>
              <h3 className=" font-dmsans font-normal text-base text-color_2">
                $ {pInfo ? pInfo.price : "454"}
              </h3>
            </Flex>
            <p className=" font-dmsans font-normal text-base text-color_2">
              Black
            </p>
          </div>

        </Flex>
      </Container>
    </section>
  );
}

export default Products;
