import React from 'react'
import Header from '../Components/Header'
import HomeImage from '../Components/HomeImage'
import MoreDetails from '../Components/MoreDetails'
import HomeSubDiv3 from '../Components/HomeSubDiv3'
import HomeSubDivVision from '../Components/HomeSubDivVision'
import Fotter from '../Components/Fotter'

const Home = () => {
  return (
    <>
    <Header/>
    <HomeImage/>
    <MoreDetails/>
    <HomeSubDiv3/>
    <HomeSubDivVision/>
    <Fotter/>
    <div className=' text-center'></div>
    </>
  )
}

export default Home