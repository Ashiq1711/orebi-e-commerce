import React from 'react'
import Container from './Container'
import Flex from './Flex'

function Offer() {
  return (
    <section className='mt-[40px] md:mt-[140px]'>

    <Container>
<Flex className='flex-wrap  lg:flex-nowrap gap-5 md:gap-8'>
    <img src="public/images/Ad_1.png" alt="add_1" />
    <div className=' flex  flex-col gap-4 md:gap-10 '>
        <img src="public/images/Ad_2.png" alt="add_2" />
        <img src="public/images/Ad_3.png" alt="add_3" />
    </div>
</Flex>
    </Container>
    </section>
  )
}

export default Offer