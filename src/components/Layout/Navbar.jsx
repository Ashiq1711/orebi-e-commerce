import React, { useEffect, useState } from 'react'
import Image from './Image'
import Container from './Container'
import List from './List'
import Listitem from './Listitem'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
function Navbar() {
  const[menubar,setMenubar]=useState( true)
  let handle_menu=()=>{
    setMenubar(!menubar)
  }
  useEffect(()=>{
function navMenu(e){
if(window.innerWidth < 768){
  setMenubar(false)
}else{
  setMenubar(true)
}
}
navMenu()
window.addEventListener('resize', navMenu)
  },[])
  return (
    <div>
      <nav className=' bg-white py-4'>

        <Container>
        <Flex>
        <Image src='public/images/Logo.png' alt="Logo"/>
        <TiThMenu onClick={handle_menu} className=' md:hidden absolute top-8 right-4'/>
 {menubar && 
 
        <List className=' rounded-[10px] w-full md:flex gap-10 bg-slate-400 md:w-auto md:static md:bg-transparent absolute left-0 pl-6'>
            <Listitem className='py-3' > <Link className='text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold hover:text-color_1'>Home</Link></Listitem>
            <Listitem className='py-3'> <Link className='text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold hover:text-color_1'>Shop</Link></Listitem>
            <Listitem className='py-3'> <Link className='text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold hover:text-color_1'>About</Link></Listitem>
            <Listitem className='py-3'> <Link className='text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold hover:text-color_1'>Contacts</Link></Listitem>
            <Listitem className='py-3'> <Link className='text-white md:text-color_2 font-dmsans font-normal text-[14px] hover:font-bold hover:text-color_1'>Journal</Link></Listitem>
          
        </List>
     
 }
        </Flex>
        </Container>
      </nav>
    </div>
  )
}

export default Navbar