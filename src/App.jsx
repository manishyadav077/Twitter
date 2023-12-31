import React from 'react'
import SideBar from './components/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
