//import React from 'react'
import { motion } from 'motion/react'
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
import About from "./layout/About"
import { usePortfolioVoiceReader } from "./data/VoiceReader"
import { FiMic, FiMicOff } from "react-icons/fi"


const Page = () => {

    const { isSpeaking, toggleVoice } = usePortfolioVoiceReader();

  return (
    <div className="bg-[#11071F]  md:min-h-screen text-white" id="page">
       <Navbar />
       <div className="py-[14%] px-[4%] md:py-72 md:px-[10%]" id="main-content">
            <div className="md:relative md:flex items-center">
                <motion.img 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    src={shadow} 
                    alt={shadow} 
                    className="w-full max-w-[400px] md:max-w-none md:w-[60%] lg:w-[50%] "
                />
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }} 
                    src={avarta} 
                    alt="profile" 
                    className="w-52 h-52 md:w-56 md:h-56 rounded-full absolute top-[22%] md:top-[40%] lg:top-[35%] left-1/2 -translate-x-1/2 md:left-54 md:translate-x-0"
                /> 
                <img 
                    src={arrow}  
                    alt="" 
                    className="hidden md:block md:absolute md:left-[42%] lg:left-[35%] md:top-2"
                />
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="md:absolute md:top-8 md:right-[20%] lg:right-[40%] text-2xl md:text-xl"
                >
                    Hello! I Am <span className="text-purple-500">Mara Ruth</span>
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.96 }}
                    className="md:absolute md:right-[10%] md:top-[38%] lg:right-[20%] pt-4"
                >
                    <h3 className="font-semibold text-2xl md:text-lg ml-[13%]"><span className="md:hidden">...</span>A web developer who</h3>
                    <h2 className="text-[3.5rem] break-words leading-tights px-8 md:py-2 ">Code. Design. <p className="text-purple-500 md:mt-4 border-1 border-white rounded-tr-full rounded-bl-full py-2 px-5 text-[2rem] md:text-[3rem] md:px-8 max-w-full break-words">Performance...</p> </h2>
                    <p className="text-xl ml-8 tracking-widest ">delivered in one seamless experience!</p>
                </motion.div>
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
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleVoice}
                    className="fixed bottom-6 right-8 z-50 flex items-center gap-2 bg-[#8b5cf6] text-black text-4xl p-3 rounded-full shadow-md cursor-pointer"
                >
                    <motion.div
                        animate={ 
                            isSpeaking
                            ? {
                                rotate: 300,
                                scale: [1, 1.80, 1]
                            }
                            : {
                                scale: 1,
                            }
                        }
                        transition={{
                            rotate: {
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                        className='absolute w-28 h-28 rounded-full bg-[conic-gradient(from_180deg, #42e8ff, #8b5cf6, #d946ef, #42e8ff)] blur-xl opacity-80'
                    />
                     
                    <div className='absolute w-24 h-24 rounded-full bg-[#d946ef]'/>
                    <motion.div
                        animate={
                            isSpeaking
                            ? {
                                scale: [1, 1.04, 1],
                            }
                            : {
                                scale: 1,
                            }
                        }
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                        }}
                        className='relative flex items-center justify-center w-20 h-20 rounded-full bg-[#241c62] text-white shadow-[0_0_30px_rgba(0,0,0,0.4)]'
                    >
                        {isSpeaking ? (
                            <FiMic 
                                title="Mute Voice Reader"
                            /> 
                         ) : (
                            <FiMicOff 
                                title="Listen to Portfolio"
                                className="text-gray-500"
                            />
                        )}
                    </motion.div>
                    
                </motion.button>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[2.5rem]"
                >Contact</motion.h2>
                <motion.p 
                    className="py-22 tracking-wider text-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    I'm currently looking into joining a cross-functional team that values improving people's lives <br />through accessible design. or have a project in mind? Let's connect.
                </motion.p>
                <a href="mailto:amarachiruhty4@gmail.com" className="text-xl hover:text-purple-500 hover:text-lg">amarachiruhty4@gmail.com</a>
                <div className="flex gap-6 mt-22">
                    <motion.a
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }} 
                        href="https://twitter.com/maracodez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={icon} alt="" />
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={google} alt="" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }} 
                        href="https://www.linkedin.com/in/mara-ruthy-2b6a5032b"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="" />
                    </motion.a>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Page