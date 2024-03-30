import React from 'react'
import Banner from '../components/Layout/Banner'
import Informatin from '../components/Layout/Informatin'
import Offer from '../components/Layout/Offer'
import NewArrivals from '../components/Layout/NewArrivals'

function Home() {
  return (
    <div>
      <Banner/>
      <Informatin/>
      <Offer/>
      <NewArrivals/>
    </div>
  )
}

export default Home