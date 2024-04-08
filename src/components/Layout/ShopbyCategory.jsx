import React, { useEffect, useState } from "react";
import List from "./List";
import Listitem from "./Listitem";
import { FaPlus } from "react-icons/fa6";
import Sub_category_modal from "./Sub_category_modal";
function ShopbyCategory() {
  const [sub_category_modal,setSub_category_modal]=useState(false)
  useEffect(()=>{

  },[])
  let handle_subcategory = () => {
    setSub_category_modal(!sub_category_modal)
  };
  return (
    <section>
      <h1 className=" font-bold texe-[20px] mb-5">Shop by Category</h1>
      <List>
        <Listitem className="flex items-center justify-between border-b py-4 ">
          <h1 className=" text-base text-color_2 cursor-pointer hover:text-color_1">
            Category 1
          </h1>
          <div>
            <FaPlus
              onClick={handle_subcategory}
              className=" text-base text-color_2 cursor-pointer hover:text-color_1"
            />
            {sub_category_modal &&
      <Sub_category_modal className=' absolute' />
            }
          </div>
        </Listitem>
      </List>
    </section>
  );
}

export default ShopbyCategory;
