import React, { useEffect, useState } from "react";
import Image from "./Image";
import Container from "./Container";
import List from "./List";
import Listitem from "./Listitem";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
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
    <div>
      <nav className=" bg-white z-50 relative">
        <Container>
          <Flex className='py-4'>
            <Link>
              <Image src="public/images/Logo.png" alt="Logo" />
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
              <List className="pl-4 mt-3 rounded-[10px] w-full md:flex gap-10 bg-color_1 md:w-auto md:static md:bg-transparent absolute left-0 sm:pl-6">
                <Listitem className="py-3">
                  {" "}
                  <Link className="text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold ">
                    Home
                  </Link>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <Link className="text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold ">
                    Shop
                  </Link>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <Link className="text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold ">
                    About
                  </Link>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <Link className="text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold ">
                    Contacts
                  </Link>
                </Listitem>
                <Listitem className="py-3">
                  {" "}
                  <Link className="text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold ">
                    Journal
                  </Link>
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
