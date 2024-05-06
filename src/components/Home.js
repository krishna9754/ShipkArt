import React from 'react'
import HeaderSection from '../common/HeroSection'
import Services from '../common/Services'
import Trusted from '../common/Trusted'

function Home() {

  const data = {
    name : "Store"
  }

  return (
    <div>
      <HeaderSection myData={data}/>
      <Services />
      <Trusted />
    </div>
  )
}

export default Home
