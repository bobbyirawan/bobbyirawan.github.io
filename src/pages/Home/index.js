import React from 'react'
import { Footer, Hero } from '../../components'
// import SocialButton from '../../components/SocialButton/SocialButton'
import Skills from '../Skills'
import { heroDataOne } from './Data'

const Home = () => {
  return (
    <>
      {/* <SocialButton /> */}
      <Hero {...heroDataOne} />
      <Skills />
      <Footer />
    </>
  )
}

export default Home