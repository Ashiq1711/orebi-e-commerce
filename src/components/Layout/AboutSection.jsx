import React from 'react'
import Image from './Image'
import Flex from './Flex'

function AboutSection() {
  return (
    <section>

    <Flex className='flex-wrap md:flex-nowrap gap-6 md:gap-0'>
        <Image src='images/Image_with_button_1.png' alt='Image_with_button_2'/>
        <Image src='images/Image_with_button_2.png' alt='Image_with_button_2'/>
    </Flex>
    <div className='px-3 md:px-0'>
        <h1 className='mt-10 md:mt-[128px] font-normal text-[20px] md:text-[39px] tracking-wider text-color_1 '>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h1>
   <Flex className='flex-wrap md:flex-nowrap'>
    <div className='w-[507px] md:mt-[118px] mt-16'>
        <h1 className=' text-2xl font-bold'>Our Vision</h1>
        <p className=' mt-3 text-[16px] text-color_2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className='w-[507px] md:mt-[118px] mt-16'>
        <h1 className=' text-2xl font-bold'>Our Vision</h1>
        <p className=' mt-3 text-[16px] text-color_2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className='w-[507px] md:mt-[118px] mt-16'>
        <h1 className=' text-2xl font-bold'>Our Vision</h1>
        <p className=' mt-3 text-[16px] text-color_2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
   </Flex>
    </div>
    </section>
  )
}

export default AboutSection