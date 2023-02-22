import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { GettingStarted } from './components/GettingStarted';

function App() {


  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="w-full"><Navbar /></div>
      </div>
      <Routes>
        <Route index element={<Home  />} />
        <Route path='features' element={<Features />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
        <Route path='getstarted' element={<GettingStarted />} />
      </Routes>
    </div>
  )
}

export default App


{/* <div className="border-[5px] border-pink px-24 py-5"><GettingStarted /></div> */}