import React, { useState } from "react";

function LogInForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailerr, setEmailerr] = useState();
  const [passworderr, setPassworderr] = useState();
  let handle_email = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handle_password = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };
  let handle_login = (e) => {
    if (!email) {
        setEmailerr('Email is requuired !')
    }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailerr("This is not a mail addres");
      }
      if(!password){
        setPassworderr('Password is requuired !')
      }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)){
        setPassworderr("Minimum eight length,one special character and one number !")
      }
  };
  return (
    <div className=" px-3 lg:px-0">
      <h1 className="text-2xl lg:text-[38px]  font-bold">Returning Customer</h1>
      <div className=" border-b">
        <div className="w-full lg:w-[1055px] ">
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between">
            <div className=" w-full lg:w-[508px] h-[106px]">
              <p className=" text-base tracking-wider ">Email address</p>
              <input
                onChange={handle_email}
                className= {email ? " w-full py-4 px-2 border-b-[2px]  outline-none" :" w-full py-4 px-2 border-b-[2px] border-b-red-500 outline-none"}
                type="email"
                placeholder="company@domain.com "
              />
              {emailerr && 
            <p className=" text-red-600">{emailerr}</p>
              }
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider ">Password</p>
              <input
                onChange={handle_password}
                className= {password ? " w-full py-4 px-2  border-b-[2px]  outline-none " :" w-full py-4 px-2 border-b-[2px] border-b-red-500 outline-none"}
                type="password"
                placeholder="******* "
              />
               {passworderr && 
            <p className=" text-red-600">{passworderr}</p>
              }
            </div>
          </div>
          <button
            onClick={handle_login}
            className=" mb-16 mt-10 px-16 font-bold py-4 rounded-lg border text-black"
          >
            Log in
          </button>
        </div>
      </div>
      <div className=" mt-14">
        <h1 className=" text-2xl lg:text-[38px] font-bold">New Customer</h1>
        <p className="lg:w-[644px] w-full text-[16px] mt-9 tracking-wide text-color_2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <button className=" mb-16 mt-11 px-14 font-bold py-4 rounded-lg border text-white bg-black">
          Continue
        </button>
      </div>
    </div>
  );
}

export default LogInForm;
