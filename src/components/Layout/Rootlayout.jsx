import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header_Navbar from './Header_Navbar'
import Footer from './Footer'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <Header_Navbar/>
        <Outlet/>
   <Footer/>
    </div>
  )
}

export default Rootlayout