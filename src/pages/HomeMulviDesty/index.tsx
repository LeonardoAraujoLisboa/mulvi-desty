import React from 'react'
import Menu from '../../components/Menu'
import Banner from '../../components/sections/HomeSections/Banner'
import Benefits from '../../components/sections/HomeSections/Benefits'
import BusinessContent from '../../components/sections/HomeSections/BusinessContent'
import Faq from '../../components/sections/HomeSections/Faq'
import Footer from '../../components/sections/HomeSections/Footer'
import RateMulviDesty from '../../components/sections/HomeSections/RateMulviDesty'
import SolutionsMulviDesty from '../../components/sections/HomeSections/SolutionsMulviDesty'
import WhoWeAre from '../../components/sections/HomeSections/WhoWeAre'

const HomeMulviDesty = () => {
  return (
    <>
      <Menu />
      <Banner />
      <Benefits />
      <RateMulviDesty />
      <SolutionsMulviDesty />
      <BusinessContent />
      <Faq />
      <WhoWeAre />
      <Footer />
    </>
  )
}

export default HomeMulviDesty