import React, { useEffect, useState } from "react";
import Image from "./Image";
import Container from "./Container";
import List from "./List";
import Listitem from "./Listitem";
import Flex from "./Flex";
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import logo from "../../../public/images/Logo.png"
function Navbar() {
  const [menubar, setMenubar] = useState(true);
  let handle_menu = () => {
    setMenubar(!menubar);
  };
  useEffect(() => {
    function navMenu(e) {
      if (window.innerWidth < 768) {
        setMenubar(false);
      } else {
        setMenubar(true);
      }
    }
    navMenu();
    window.addEventListener("resize", navMenu);
  }, []);
  return (
    <div  >
      <nav className=" bg-white z-50 fixed top-0 w-full shadow-md">
        <Container>
          
          <Flex className='py-4 px-4 xl:px-0'>
            <Link to={"/"}>
              <Image src={logo} alt="Logo" />
            </Link>
            {menubar ? (
              <IoMdClose
                onClick={handle_menu}
                className=" md:hidden absolute top-4 right-4 text-xl"
              />
            ) : (
              <TiThMenu
                onClick={handle_menu}
                className=" md:hidden absolute top-4 right-4 text-xl"
              />
            )}
            {menubar && (
              <List className="pl-4 mt-3 rounded-[10px] w-full md:flex gap-10  md:w-auto md:static md:bg-transparent absolute left-0 sm:pl-6">
                <Listitem className="py-3 ">
                  {" "}
                  <NavLink to='/' className="text-white  md:text-color_2 font-dmsans  text-[14px] hover:text-color_1 font-bold ">
                    Home
                  </NavLink>
                </Listitem>
                <Listitem className="py-3 ">
                  {" "}
                  <NavLink to='/products' className="text-white md:text-color_2 font-dmsans  hover:text-color_1 text-[14px] font-bold ">
                  Products
                  </NavLink>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <NavLink to='/about' className="text-white md:text-color_2 font-dmsans  hover:text-color_1 text-[14px] font-bold ">
                    About
                  </NavLink>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <NavLink to='/contact' className="text-white md:text-color_2 font-dmsans hover:text-color_1  text-[14px] font-bold ">
                    Contacts
                  </NavLink>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <NavLink to='/jurnal' className="text-white md:text-color_2 font-dmsans  hover:text-color_1 text-[14px] font-bold ">
                    Journal
                  </NavLink>
                </Listitem>
              </List>
            )}
            <div>
              <Flex className="gap-5">
                <Link className=" hover:text-color_1 text-color_2 hidden md:block font-dmsans font-bold text-[14px]">
                  EN
                </Link>
                <Link className=" hover:text-color_1 text-color_2 hidden md:block font-dmsans font-bold text-[14px]">
                  RU
                </Link>
              </Flex>
            </div>
          </Flex>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
