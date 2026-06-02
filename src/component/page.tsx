//import React from 'react'
//import { motion } from 'motion'
import Navbar from "./layout/navbar"
import shadow from "../assets/Gradient.png"
import avarta from "../assets/profile1 (2).jpg"
import arrow from '../assets/Arrow.png'
import icon from '../assets/icon-twitter.svg'
import google from '../assets/Vector.png'
import linkedin from '../assets/linkedin.svg'
import Lab from './layout/lab'
import Lang from "./layout/lang"
import Project from "./layout/project"
import About from "./layout/about"
import { usePortfolioVoiceReader } from "./data/VoiceReader"
import { FiMic, FiMicOff } from "react-icons/fi"


const Page = () => {

    const { isSpeaking, toggleVoice } = usePortfolioVoiceReader();

  return (
    <div className="bg-[#11071F]  md:min-h-screen text-white" id="page">
       <Navbar />
       <div className="py-[14%] px-[4%] md:py-72 md:px-[10%]" id="main-content">
            <div className="md:relative md:flex items-center">
                <img 
                    src={shadow} 
                    alt={shadow} 
                    className=" lg:w-[50%] "
                />
                <img 
                    src={avarta} 
                    alt="profile" 
                    className="w-52 h-52 md:w-56 md:h-56 rounded-full absolute top-[28%] md:top-[40%] lg:top-[35%] left-42 md:left-52"
                />
                <img 
                    src={arrow}  
                    alt="" 
                    className="hidden md:block md:absolute md:left-[42%] lg:left-[35%] md:top-2"
                />
                <p className="md:absolute md:top-8 md:right-[20%] lg:right-[40%] text-2xl md:text-xl">
                    Hello! I Am <span className="text-purple-500">Mara Ruth</span>
                </p>
                <div className="md:absolute md:right-[10%] md:top-[38%] lg:right-[20%] pt-4">
                    <h3 className="font-semibold text-2xl md:text-lg ml-[13%]"><span className="md:hidden">...</span>A web developer who</h3>
                    <h2 className="text-[4rem] px-8 md:py-2">Code. Design. <p className="text-purple-500 md:mt-4 border-1 border-white rounded-tr-full rounded-bl-full pl-8 text-[3.5rem] md:px-8">Performance...</p> </h2>
                    <p className="text-xl ml-8 tracking-widest ">delivered in one seamless experience!</p>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="lab">
                <Lab />
            </div>
            <Lang />
            <Project />
            <div className="mt-32 md:px-[2%]">
                <button
                    onClick={toggleVoice}
                    className="fixed bottom-6 right-8 z-50 flex items-center gap-2 bg-gray-200 text-black text-4xl p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                    {isSpeaking ? 
                        <FiMic 
                            title="Mute Voice Reader"
                        /> 
                        : 
                        <FiMicOff 
                            title="Listen to Portfolio"
                            className="text-red-500"
                        />
                    }
                </button>
                <h2 className="text-[2.5rem]">Contact</h2>
                <p className="py-22 tracking-wider text-2xl">I'm currently looking into joining a cross-functional team that values improving people's lives <br />through accessible design. or have a project in mind? Let's connect.</p>
                <a href="mailto:amarachiruhty4@gmail.com" className="text-xl hover:text-purple-500">amarachiruhty4@gmail.com</a>
                <div className="flex gap-6 mt-22">
                    <a 
                        href="https://twitter.com/maracodez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={icon} alt="" />
                    </a>
                    <a 
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={google} alt="" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/mara-ruthy-2b6a5032b"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="" />
                    </a>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Page