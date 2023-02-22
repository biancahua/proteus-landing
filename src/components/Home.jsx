import {React} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Features } from './Features';
import { Team } from './Team';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <div>
      <div className=" pb-10 pt-36 mt-100 w-full">
        <div className='p-5 text-black z-[2] text-center w-full flex flex-col justify-center items-center'>
          <h2 id="proteus-logo" className='mt-32 mb-10 max-w-[750px] shadow-white shadow-2xl'><img src="src/assets/PROTEUS3.png" alt="Logo"/></h2>
          <p className="py-2 text-xl text-black/60">Track your Kubernetes Jobs and Cronjobs</p>
          <button href="https://github.com/oslabs-beta/proteus" id='proteus-button'>Get Proteus</button>
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
};