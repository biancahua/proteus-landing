import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
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
        <div className=" pb-10 pt-36 mt-100 w-full"><Home /></div>
        <div className="px-24 py-10"><Features /></div>
        <div className="px-24 py-5"><Team /></div>
        <div className="px-24 py-5"><Contact /></div>
        <div className="border-[5px] border-pink px-24 py-5"><GettingStarted /></div>
      </div>
    </div>
  )
}

export default App
