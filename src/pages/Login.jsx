import React from 'react'
import Breadcrumb from '../components/Layout/Breadcrumb'
import Container from '../components/Layout/Container'
import LogInForm from '../components/Layout/LogInForm'
function Login() {
  return (
    <Container>
        <Breadcrumb/>
        <div className='px-3 md:px-0 mt-10  md:mt-[127px] pb-14 border-b'>
            <p className='w-full md:w-[644px] text-[16px] tracking-wide text-color_2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='mt-[57px]'>
            <LogInForm/>
        </div>
    </Container>
  )
}

export default Login