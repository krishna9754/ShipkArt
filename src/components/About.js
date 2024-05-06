import React from 'react'
import HeroSection from '../common/HeroSection'

function About() {
  const data = {
    name : "eCommerce"
  }

  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

export default About