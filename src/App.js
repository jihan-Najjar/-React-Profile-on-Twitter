import React from 'react'
import Header from './components/Header'
import Body from './Body'
import SideBar from './SideBar'

const App = () => {
  return (
    <div className='app'>
        <Header/>
        <Body/>
        <SideBar/>
    </div>
  )
}

export default App