import React, { useState } from 'react'
import Flex from "./Flex";
import ReactFlagsSelect from "react-flags-select";
function SignUpForm() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div>
         <h1 className="text-2xl lg:text-[38px]  font-bold">Your Personal Details</h1>
         <div className=" mt-14 border-b">
        <div className="w-full lg:w-[1055px] ">
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between">
            <div className=" w-full lg:w-[508px] h-[106px]">
              <p className=" text-base tracking-wider font-bold">First Name</p>
              <input
           
                className= " w-full py-4 px-2 border-b-[2px]  outline-none" 
                type="text"
                placeholder="First Name"
              />
         
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider font-bold">Last Name</p>
              <input
          
                className=  " w-full py-4 px-2  border-b-[2px]  outline-none " 
                type="text"
                placeholder="Last Name"
              />
          
            </div>
          </div>
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between pb-14">
            <div className=" w-full lg:w-[508px] h-[106px]">
              <p className=" text-base tracking-wider font-bold">Email address</p>
              <input
           
                className= " w-full py-4 px-2 border-b-[2px]  outline-none" 
                type="email"
                placeholder="company@domain.com "
              />
         
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider font-bold">Telephone</p>
              <input
          
                className=  " w-full py-4 px-2  border-b-[2px]  outline-none " 
                type="number"
                placeholder="Your phone number "
              />
          
            </div>
          </div>
        
        </div>
      </div>

      </div>
      <div className=' mt-[58px]'>
         <h1 className="text-2xl lg:text-[38px]  font-bold">New Customer</h1>
         <div className=" mt-14 border-b">
        <div className="w-full lg:w-[1055px] ">
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between">
            <div className=" w-full lg:w-[508px] h-[106px]">
              <p className=" text-base tracking-wider font-bold ">Address 1</p>
              <input
           
                className= " w-full py-4 px-2 border-b-[2px]  outline-none" 
                type="text"
                placeholder="4279 Zboncak Port Suite 6212 "
              />
         
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider font-bold ">Address 2</p>
              <input
          
                className=  " w-full py-4 px-2  border-b-[2px]  outline-none " 
                type="text"
                placeholder="--- "
              />
          
            </div>
          </div>
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between ">
            <div className=" w-full lg:w-[508px] h-[106px]">
              <p className=" text-base tracking-wider font-bold ">City</p>
              <input
           
                className= " w-full py-4 px-2 border-b-[2px]  outline-none" 
                type="text"
                placeholder="Your city"
              />
         
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider font-bold ">Post Code</p>
              <input
          
                className=  " w-full py-4 px-2  border-b-[2px]  outline-none " 
                type="number"
                placeholder="7800 "
              />
          
            </div>
          </div>
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between pb-14">
            <div className=" w-full lg:w-[508px] h-[106px]border-b-[2px]">
              <p className=" text-base tracking-wider font-bold ">Country</p>
            <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
   
    searchable
    searchPlaceholder="Search countries"
    className=' border-none'
  
  
  />
              {/* <input
           
                className= " w-full py-4 px-2 border-b-[2px]  outline-none" 
                type="text"
                placeholder="Please select"
              /> */}
         
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider font-bold ">Region/State</p>
              <input
          
                className=  " w-full py-4 px-2  border-b-[2px]  outline-none " 
                type="text"
                placeholder="Please select"
              />
          
            </div>
          </div>
        
        </div>
      </div>

      </div>
      <div className=' mt-[58px]'>
         <h1 className="text-2xl lg:text-[38px]  font-bold">Your Password</h1>
         <div className=" mt-14 border-b">
        <div className="w-full lg:w-[1055px] pb-16 ">
          <div className="flex-wrap lg:flex-nowrap lg:flex justify-between">
            <div className=" w-full lg:w-[508px] h-[106px]">
              <p className=" text-base tracking-wider font-bold">Password</p>
              <input
           
                className= " w-full py-4 px-2 border-b-[2px]  outline-none" 
                type="password"
                placeholder="password"
              />
         
            </div>
            <div className="w-full lg:w-[508px]  h-[106px]">
              <p className=" text-base tracking-wider font-bold">Repeat Password</p>
              <input
          
                className=  " w-full py-4 px-2  border-b-[2px]  outline-none " 
                type="password"
                placeholder="******* "
              />
          
            </div>
          </div>
       
       
        
        </div>
      </div>

      </div>
      <div className=' flex items-center gap-3 mt-[65px]'>
        <input type="checkbox" />
        <p className=' text-color_2'>I have read and agree to the Privacy Policy</p>
      </div>
      <div className=' flex items-center gap-10 mt-[24px]'>
        <p className=' text-color_2'>Subscribe Newsletter</p>
        <Flex className='gap-2'>
        <input type="checkbox" />
          <p>Yes</p>
        </Flex >
        <Flex className='gap-2'>
        <input type="checkbox" />
          <p>No</p>
        </Flex>
      </div>
      <button className=' font-bold text-white bg-black rounded-lg px-20 py-4 mt-[27px] {
        
      }'>Log In</button>
    </div>
  )
}

export default SignUpForm