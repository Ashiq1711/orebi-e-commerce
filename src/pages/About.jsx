import React from 'react'
import Breadcrumb from '../components/Layout/Breadcrumb'
import Container from '../components/Layout/Container'
import AboutSection from '../components/Layout/AboutSection'

function About() {
  return (
    <Container>
      <Breadcrumb/>
      <div className='mt-14 md:mt-[126px]'>
        <AboutSection/>
      </div>
    </Container>
  )
}

export default About