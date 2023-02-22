import {React} from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import { Navbar } from './components/Navbar';
import Proteus from '/src/assets/PROTEUS3.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline' 

export const Home = () => {
    return (
        <div className='p-5 text-black z-[2] text-center w-full flex flex-col justify-center items-center'>
            <h2 className='pt-32 pb-8 max-w-[750px]'><img src={Proteus} alt="Logo"/></h2>
            <p className="py-2 text-xl text-black/60">Track your Kubernetes Jobs and Cronjobs</p>
            <button href="https://github.com/oslabs-beta/proteus" id='proteus-button'>Get Proteus</button>
        </div>
    )
};