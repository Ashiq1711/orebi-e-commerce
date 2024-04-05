import React from 'react'
import Banner from '../components/Layout/Banner'
import Informatin from '../components/Layout/Informatin'
import Offer from '../components/Layout/Offer'
import NewArrivals from '../components/Layout/NewArrivals'
import Phone_of_the_year from '../components/Layout/Phone_of_the_year'
import OurBestsellers from '../components/Layout/OurBestsellers'
import Special_Offers from '../components/Layout/Special_Offers'

function Home() {
  return (
    <div>
      <Banner/>
      <Informatin/>
      <Offer/>
      <NewArrivals/>
      <OurBestsellers/>
      <Phone_of_the_year/>
      <Special_Offers/>
    </div>
  )
}

export default Home