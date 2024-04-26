import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import PriceCategory from "./PriceCategory";

function ShopbyPrice() {
  let [productprice, setProductprice] = useState(true);
  return (
    <div>
      <button
        onClick={() => setProductprice(!productprice)}
        className="mt-10 w-full flex items-center justify-between"
      >
        <h1 className=" font-bold texe-[20px]  ">Shop by Price</h1>
        {productprice ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      {productprice &&
      <div>
        <PriceCategory price="$0.00 - $9.99" />
        <PriceCategory price="$0.00 - $9.99" />
        <PriceCategory price="$0.00 - $9.99" />
      </div>
      }
    </div>
  );
}

export default ShopbyPrice;
