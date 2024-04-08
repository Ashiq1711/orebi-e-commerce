import React from 'react'
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
function Breadcrumb() {
  
  return (
    <div>
        <h1 className=' font-bold text-[50px] mt-[124px] capitalize'>{window.location.pathname.slice(1 )}</h1>
        <ul className=' flex items-center gap-2 mt-2'>
            <Link to='/'>
            <li className=' font-normal text-[12px] capitalize'>Home</li>
            </Link>
            <li className=' font-normal text-[12px]'><LiaAngleRightSolid /></li>
            <Link>
            <li className=' font-normal text-[12px] capitalize'>{window.location.pathname.slice(1 )}</li>
            </Link>
        </ul>
    </div>
  )
}

export default Breadcrumb