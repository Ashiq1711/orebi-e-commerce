import React from 'react'
import Container from './Container'
import Title from './Title'
import Flex from './Flex'
import Products from './Products'

function Special_Offers() {
  return (
    <section className=" mt-10 md:mt-[108px]">
    <Container>
    <Title title="Special Offers"/>
    <Flex className=' flex-wrap md:flex-nowrap w-full '>

      <Products pimage="public/images/p1.png" isnew={true} />
      
</Flex>
    </Container>
</section>
  )
}

export default Special_Offers