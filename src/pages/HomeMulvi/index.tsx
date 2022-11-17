import React from 'react'
import Menu from '../../components/Menu'
import Banner from '../../components/sections/HomeSections/Banner'
import Benefits from '../../components/sections/HomeSections/Benefits'
import BusinessContent from '../../components/sections/HomeSections/BusinessContent'
import Faq from '../../components/sections/HomeSections/Faq'
import Footer from '../../components/sections/HomeSections/Footer'
import RateMulvi from '../../components/sections/HomeSections/RateMulvi'
import SolutionsMulvi from '../../components/sections/HomeSections/SolutionsMulvi'
import WhoWeAre from '../../components/sections/HomeSections/WhoWeAre'

const HomeMulvi = () => {
  return (
    <>
      <Menu />
      <Banner />
      <Benefits />
      <RateMulvi />
      <SolutionsMulvi />
      <BusinessContent />
      <Faq />
      <WhoWeAre />
      <Footer />
    </>
  )
}

export default HomeMulvi