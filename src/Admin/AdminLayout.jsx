import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AdminLayout() {
  let navigate=useNavigate()
  let userdata=useSelector((state)=>state.userinfo.value)
 useEffect(()=>{
if(!userdata){
  navigate('/admin/login')
}
 },[])
  return (
    <div className=' flex bg-indigo-600 bg-opacity-10'>
      <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout