import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../components/Layout/Image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userlogInfo } from "../../Slices/userSlices";
function AdminLogin() {
  let dispatch=useDispatch()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailerr, setEmailerr] = useState();
  const [passworderr, setPassworderr] = useState();
  const [passwordShow, setPasswordShow] = useState(false);
  let navigate = useNavigate();
  let handle_email = (e) => {
    setEmail(e.target.value);
    setEmailerr();
  };
  let handle_password = (e) => {
  
    setPassword(e.target.value);
    setPassworderr();
  };
  let handle_submit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailerr("Email is required !");
      return;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailerr("This is not a mail addres");
      return;
    }
    if (!password) {
      setPassworderr("Password is required !");
      return;
    } 
    // else if (
    //   !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // ) {
    //   setPassworderr("Password must be strong !");
    //   return;
    // }
    if (email && password) {
      axios
        .post("http://localhost:3000/api/v1/auth/login", {
          email,
          password,
        })
        .then((data) => {
          if (data.data.user.role == "admin") {
            dispatch(userlogInfo(data.data.user))
             localStorage.setItem("userinfo",JSON.stringify(data.data.user) )
            toast.success(data.data.success, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate('/admin')
          } else {
            toast.error("only admin can access", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((error) => {
          console.log(error)
          toast.error(error.response.data.error, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image src="public/images/Logo.png" alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your admin dashbord
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handle_email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {emailerr && <p className=" text-red-500 ">{emailerr}</p>}
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={handle_password}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    type={passwordShow ? "text" : "password"}
                  />
                  {passwordShow ? (
                    <FaEye
                      onClick={() => {
                        setPasswordShow(false);
                      }}
                      className=" absolute top-3 right-4 text-xl"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => {
                        setPasswordShow(true);
                      }}
                      className=" absolute top-3 right-4 text-xl"
                    />
                  )}
                </div>
                {passworderr && <p className=" text-red-500">{passworderr}</p>}
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to="/forgetpassword"
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                onClick={handle_submit}
                type="submit"
                className="w-full text-white bg-color_1 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
