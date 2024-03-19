import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Nav from './Nav'
import Header_Navbar from './Header_Navbar'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <Header_Navbar/>
        <Outlet/>
        <h1 className=' font-dmsans font-bold text-color_3'>footer</h1>
    {/* <Nav/> */}
    </div>
  )
}

export default Rootlayout