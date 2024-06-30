import React from 'react'
import Search from './components/Search'
import Liked from './components/Liked'
import Trends from './components/Trends'
import Footer from './components/Footer'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Search/>
      <Liked/>
      <Trends/>
      <Footer/>
    </div>
  )
}

export default SideBar