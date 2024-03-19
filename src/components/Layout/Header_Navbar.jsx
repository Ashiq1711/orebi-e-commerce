import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import List from "./List";
import Listitem from "./Listitem";
import { Link } from "react-router-dom";
function Header_Navbar() {
  let [categoryItem,setCategotyItem]=useState(false)
  let handle_category=()=>{
    setCategotyItem(!categoryItem)
  }
  let categoryRef=useRef();

  useEffect(()=>{
document.addEventListener('click',function(e){
if(categoryRef.current.contains(e.target)){
  setCategotyItem(true)
}else{
  setCategotyItem(false)
}
})
  },[])

  return (
    <div>
      <header>
        <Container>
          <Flex className=" justify-between">
            <Flex dref={categoryRef} onClick={handle_category} className="items-center   relative">
              <HiOutlineMenuAlt2 className="cursor-pointer" />
              <p className=" text-[14px] pl-3 text-color_1 select-none font-normal cursor-pointer">
                Shop by Category
              </p> 
              {categoryItem && 
           

            <List className=' absolute top-10 left-0 mt-2 w-[263px] bg-color_1'>
              <Listitem className='border-color_2 border-b'>
                <Link className=' inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 '>Accesories</Link>
              </Listitem>
              <Listitem className='border-color_2 border-b'>
                <Link className=' inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 '>Furniture</Link>
              </Listitem>
              <Listitem className='border-color_2 border-b'>
                <Link className=' inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 '>Electronics</Link>
              </Listitem>
              <Listitem className='border-color_2 border-b'>
                <Link className=' inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 '>Clothes</Link>
              </Listitem>
      
              <Listitem className='border-color_2 border-b'>
                <Link className=' inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 '>Bags</Link>
              </Listitem>
      
              <Listitem className='border-color_2 border-b'>
                <Link className=' inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 '>Home appliances</Link>
              </Listitem>
      
            </List>
           
              }
            </Flex>
            <h1>center</h1>
            <h1>last</h1>
          </Flex>
        </Container>
      </header>
    </div>
  );
}

export default Header_Navbar;
