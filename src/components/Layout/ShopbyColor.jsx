import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import ColorCategory from "./ColorCategory";
function ShopbyColor() {
  let [colorShow, setColorShow] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setColorShow(!colorShow)}
        className="mt-10 w-full flex items-center justify-between"
      >
        <h1 className=" font-bold texe-[20px]  ">Shop by Color</h1>
        {colorShow ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      {colorShow && (
        <div>

            <ColorCategory colorname='Color 1' colorcode='#DD2100'/>
            <ColorCategory colorname='Color 2' colorcode='#FFF700'/>
            <ColorCategory colorname='Color 3 ' colorcode='#00FF59'/>
        </div>
      )}
    </div>
  );
}

export default ShopbyColor;
