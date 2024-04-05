import React from 'react'
import Flex from './Flex'
import Container from './Container'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
function Informatin() {
  return (
    <section className=' border-y-2'>

    <Container>

    <Flex className='py-4 px-4 lg:px-0'>
        <Flex className='gap-4 justify-center '>
            <h4 className='text-[12px] md:text-2xl font-bold text-color_1 drop-shadow-2xl'>2</h4>
            <p className=' font-dmsans text-color_2 text-[12px] md:text-2xl'>Two years warranty</p>
        </Flex>
        <Flex className='gap-4 justify-center '>
        <MdLocalShipping className='text-[12px] md:text-2xl'/>
            <p className=' font-dmsans text-color_2 text-[12px] md:text-2xl'>Free shipping</p>
        </Flex>
        <Flex className='gap-4 justify-center '>
        <AiOutlineReload className=' text-[12px] md:text-2xl' />
            <p className=' font-dmsans text-color_2 text-[12px] md:text-2xl'>Return policy in 30 days</p>
        </Flex>
    </Flex>
    </Container>
    </section>
  )
}

export default Informatin