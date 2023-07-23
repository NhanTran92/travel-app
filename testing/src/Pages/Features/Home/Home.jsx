import React from 'react'
import HomeOfFooter from './HomeOfFooter/HomeOfFooter'
import DiscoverTravel from './DiscoverTravel/DiscoverTravel'
import Endow from "./Endow/Endow"
import LastOfEndow from "./Last/LastOfEndow"

export default function Home() {
  return (
    <div className='home'>
     <img src={"https://media.travel.com.vn/SlideShow/sl_230707_TOURCHATGIATOT_1920-570px.webp"}></img>
     <div><Endow/></div>
     <div className='header'><DiscoverTravel/></div>
     <div><LastOfEndow/></div>
     <HomeOfFooter/>
    
    </div>
  )
}
