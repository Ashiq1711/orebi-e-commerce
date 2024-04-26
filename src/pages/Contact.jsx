import React from 'react'
import Container from '../components/Layout/Container'
import Breadcrumb from '../components/Layout/Breadcrumb'
import ContactForm from '../components/Layout/ContactForm'

function Contact() {
  return (
    <Container>
<Breadcrumb/>
<div className='mt-14 md:mt-[126px]'>
  <ContactForm/>
</div>
    </Container>
  )
}

export default Contact