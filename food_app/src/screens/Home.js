import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MediaCard from '../components/MediaCard'
import Caraousel from '../components/Caraousel'

export default function Home() {
  return (
    <div>
        <div>
            <Navbar/>
            
        </div>
        <div>
            <Caraousel/>
            <MediaCard/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
