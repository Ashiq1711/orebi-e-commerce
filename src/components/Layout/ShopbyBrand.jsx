import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import BrandCategory from './BrandCategory';

function ShopbyBrand() {
    let [brandcategory,setBrandcategory]=useState(false)
  return (
    <div>
       
        <button
      onClick={()=>setBrandcategory(!brandcategory)}
        className="mt-10 w-full flex items-center justify-between"
      >
        <h1 className=" font-bold texe-[20px]  ">Shop by Color</h1>
        {brandcategory ?
        <FaAngleDown /> 
        :
        <FaAngleUp />
        }
      </button>
      <div>
{brandcategory &&
<div>

    <BrandCategory brandname='Brand one'/>
    <BrandCategory brandname='Brand one'/>
    <BrandCategory brandname='Brand one'/>
    <BrandCategory brandname='Brand one'/>
</div>
      
}
      </div>
    </div>
  )
}

export default ShopbyBrand

