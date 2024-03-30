import React from 'react'
import Container from './Container'
import Title from './Title'
import Products from './Products'

function NewArrivals() {
  return (
    <section className=' mt-[108px]'>

    <Container>
       <Title title='New Arrivals'/>
       <Products/>
        
    </Container>
    </section>
  )
}

export default NewArrivals