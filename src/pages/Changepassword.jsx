import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../components/Layout/Image";
import Container from "../components/Layout/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
function Changepassword() {
let navigate=  useNavigate()
  let { token } = useParams();
  // console.log(token);
  let [email, Setemail] = useState();
  let [newpassword, Setnewpassword] = useState();
  let handleChangePassword = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/api/v1/auth/changepassword",
        {
          email,
          newpassword: newpassword,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((data) => {
        console.log(data);
        alert("password changed successfully");
        navigate('/admin/login')
      })
      .catch((err) => {
        console.log(err);
        alert("something error");
      });
  };
  return (
    <Container>
      <section className="bg-gray-50 dark:bg-gray-900">
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
                Change your Password
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
                    onChange={(e) => Setemail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New password
                  </label>
                  <input
                    onChange={(e) => Setnewpassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Change your password"
                    required=""
                  />
                </div>

                <button
                  onClick={handleChangePassword}
                  type="submit"
                  className="w-full text-white bg-color_1 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Changepassword;
