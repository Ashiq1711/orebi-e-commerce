import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import List from "./List";
import Listitem from "./Listitem";
import { Link } from "react-router-dom";
import Input from "./Input";
import { FaSearch } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { FaShoppingCart, FaAngleRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import Image from "./Image";
import { IoCloseSharp } from "react-icons/io5";
function Header_Navbar() {
  let [categoryItem, setCategotyItem] = useState(false);
  let [account, setAccount] = useState(false);
  let [cart, setCart] = useState(false);

  let categoryRef = useRef();
  let accountRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoryRef.current.contains(e.target)) {
        setCategotyItem(!categoryItem);
      } else {
        setCategotyItem(false);
      }
      if (accountRef.current.contains(e.target)) {
        setAccount(!account);
      } else {
        setAccount(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCart(!cart);
      } else {
        setCart(false);
      }
    });
  }, [categoryItem, account, cart]);

  return (
    <div>
      <header className="bg-[#979797] relative z-40">
        <Container>
          <Flex className=" justify-between px-4 lg:px-0 py-2 md:py-4">
            <Flex
              dref={categoryRef}
              // onClick={handle_category}
              className="items-center py-4  relative"
            >
              <HiOutlineMenuAlt2 className="cursor-pointer text-xl" />
              <p className=" hidden md:block text-[14px] pl-3 text-color_1 select-none font-bold cursor-pointer">
                Shop by Category
              </p>
              {categoryItem && (
                <List className=" absolute top-12 left-0 mt-2 w-[263px] bg-color_1">
                  <Listitem className="border-color_2 border-b flex items-center justify-between">
                    <Link className=" inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 ">
                      Accesories
                    </Link>
                    <FaAngleRight className=" text-white mr-3" />
                  </Listitem>
                  <Listitem className="border-color_2 border-b flex items-center justify-between">
                    <Link className=" inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 ">
                      Furniture
                    </Link>
                    <FaAngleRight className=" text-white mr-3" />
                  </Listitem>
                  <Listitem className="border-color_2 border-b flex items-center justify-between">
                    <Link className=" inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 ">
                      Electronics
                    </Link>
                    <FaAngleRight className=" text-white mr-3" />
                  </Listitem>
                  <Listitem className="border-color_2 border-b flex items-center justify-between">
                    <Link className=" inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 ">
                      Clothes
                    </Link>
                    <FaAngleRight className=" text-white mr-3" />
                  </Listitem>

                  <Listitem className="border-color_2 border-b flex items-center justify-between">
                    <Link className=" inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 ">
                      Bags
                    </Link>
                    <FaAngleRight className=" text-white mr-3" />
                  </Listitem>

                  <Listitem className="border-color_2 border-b flex items-center justify-between">
                    <Link className=" inline-block hover:ml-3  text-white  text-[14px] font-dmsans hover:font-bold font-normal pl-6 py-4 duration-200 ">
                      Home appliances
                    </Link>
                    <FaAngleRight className=" text-white mr-3" />
                  </Listitem>
                </List>
              )}
            </Flex>

            <div className=" relative px-6 w-[600px] md:px-0">
              <Input
                className=" h-[40px] md:h-[50px] w-full  border-none pl-4 outline-none rounded-md"
                type="text"
                placeholder="Search Products"
              />
              <FaSearch className=" absolute top-3 md:right-4 right-8 text-xl" />
            </div>
            <Flex className="md:gap-5 gap-2">
              <div ref={accountRef} className="flex items-center relative">
                <ImUser className="text-xl cursor-pointer" />
                {account ? <FaCaretDown /> : <GoTriangleUp />}
                {account && (
                  <List className="absolute top-6 right-0 mt-3 w-[200px] bg-white shadow-xl ">
                    <Listitem className=" border-color_2 hovet:border-b text-center hover:bg-color_1 hover:text-white">
                      <Link to='/signup' className="  inline-block text-[14px] font-dmsans  font-semibold py-4  ">
                        My Account
                      </Link>
                    </Listitem>
                    <Listitem className="border-color_2 hovet:border-b text-center hover:bg-color_1 hover:text-white ">
                      <Link to='/login' className=" inline-block text-[14px] font-dmsans  font-semibold py-4  ">
                        Log In
                      </Link>
                    </Listitem>
                  </List>
                )}
              </div>
              <div ref={cartRef} className=" relative">
                <FaShoppingCart className="text-xl cursor-pointer" />
                {cart && (
                  <div className=" bg-white shadow-2xl rounded-md w-[360px] h-[240px]  absolute top-12 right-0">
                    <div>
                      <Flex className=" p-5 bg-[#979797]">
                        <Image
                          src="images/Screenshot_2.png"
                          alt="screenshort"
                        />
                        <div>
                          <h1 className=" font-dmsans font-bold text-base">
                            Black Smart Watch
                          </h1>
                          <p className=" font-dmsans font-bold text-base mt-3">
                            $44.00
                          </p>
                        </div>
                        <IoCloseSharp className="text-2xl bg-white rounded-full hover:text-red-500 cursor-pointer" />
                      </Flex>
                    </div>
                    <div className=" bg-white">
                      <p className=" font-dmsans font-normal text-[16px] p-4">
                        Subtotal: <span className="font-bold">$44.00</span>
                      </p>

                      <button className="ml-4 px-10 py-4 border border-color_1 text-[16px] font-dmsans font-bold hover:text-white hover:bg-color_1 duration-300">
                        View Cart
                      </button>
                      <button className="ml-4 px-10 py-4 border border-color_1 text-[16px] font-dmsans font-bold hover:text-white hover:bg-color_1 duration-300">
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Flex>
          </Flex>
        </Container>
      </header>
    </div>
  );
}

export default Header_Navbar;
