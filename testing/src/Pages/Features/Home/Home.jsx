import React from 'react'
import HomeOfFooter from './HomeOfFooter/HomeOfFooter'
import DiscoverTravel from './DiscoverTravel/DiscoverTravel'
export default function Home() {
  return (
    <div>
     <img src={"https://media.travel.com.vn/SlideShow/sl_230707_TOURCHATGIATOT_1920-570px.webp"}></img>
     <div className='container-header-discover'><DiscoverTravel/></div>
     <HomeOfFooter/>
    
    </div>
  )
}
