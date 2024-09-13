import React, { useEffect, useRef, useState } from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userlogInfo } from "../../../Slices/userSlices";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
function Sidebar() {
  const [userdropdown, setUserdropdown] = useState(false);
  const [productdropdown, setProductdropdown] = useState(false);
  const [categorydropdown, setCategorydropdown] = useState(false);
  const userdata = useSelector((state) => state.userinfo.value);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userRef = useRef();
  // let productRef=useRef()
  // let catrgoryRef=useRef()
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (userRef.current.contains(e.target)) {
        setUserdropdown(!userdropdown);
      } else {
        setUserdropdown(false);
      }
      // if (productRef.current.contains(e.target)) {
      //   setProductdropdown(!productdropdown);
      // } else {
      //   setProductdropdown(false);
      // }
    });
  }, []);

  let handlelogout = () => {
    dispatch(userlogInfo(""));
    localStorage.setItem("userinfo", "");
    navigate("/admin/login");
  };
  return (
    <>
      <aside
      
        id="sidebar-multi-level-sidebar"
        className=" pl-6 z-40 w-72  h-screen "
        aria-label="Sidebar"
      >
        <div className="h-full rounded-2xl px-3 py-4 overflow-y-auto bg-white shadow-2xl">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <div className=" py-3 pl-3">
              <h1 className=" text-xl">
                User : <span className=" text-base">{userdata.name}</span>
              </h1>
              <h1 className=" mt-3 text-xl">
                Role : <span className="text-base">{userdata.role}</span>
              </h1>
            </div>

            <div>
              <li ref={userRef}>
                <button
                  onClick={() => setUserdropdown(!userdropdown)}
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <FaUser />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Users
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <ul
                  id="dropdown-example"
                  className={
                    userdropdown ? " py-2 space-y-2" : "hidden py-2 space-y-2"
                  }
                >
                  <li>
                    <NavLink
                      to="alluser"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      All users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="updateuser"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Update users
                    </NavLink>
                  </li>
                </ul>
              </li>
            </div>

            <li>
              <button
                onClick={() => setProductdropdown(!productdropdown)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
              <MdOutlineProductionQuantityLimits />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Products
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={
                  productdropdown ? " py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <NavLink
                    to="allproducts"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="addproducts"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="updateproducts"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update Products
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <button
                onClick={() => setCategorydropdown(!categorydropdown)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <BiSolidCategoryAlt />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Category
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={
                  categorydropdown ? " py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <NavLink
                    to="allcategory"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="addcategory"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="updatecategory"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update Categories
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <li className=" absolute list-none bottom-5">
            <button
              onClick={handlelogout}
              className="p-3 rounded-md left-0 flex items-center gap-3 ml-0  hover:bg-slate-400 hover:text-white "
            >
              <IoMdLogOut />
              <h1>Log out</h1>
            </button>
          </li>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
