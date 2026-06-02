//import React from 'react'
// import { motion } from "motion"
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
//import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

  //const navigate = useNavigate();

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "lab"];
      let current = "home";

     for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the component file container has crossed past the header area
          if (rect.top <= 140) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		const navbarOffset = 90;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - navbarOffset;


		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		})
	}
	setIsOpen(false)
  }

    //const closeMenu = () => setIsOpen(false);

  return (
    <div 
		className={` text-white fixed top-0 left-0 right-0 px-12 md:px-50 py-4 md:py-8 ${
			scrolled
			? "bg-[#1A0B2E] backdrop-blur-md shadow-md "
			: "bg-transparent"
		} z-50`}
	>
        <div className="flex justify-between">
            <h1 className="text-xl font-semibold">MARA</h1>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-white cursor-pointer"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div className="hidden md:flex gap-32 font-semibold">
                <button 
                    className={`cursor-pointer ${
						activeSection === "home"
						? "text-purple-500 underline underline-offset-4"
                  		: "text-gray-700"
					}`}
                    onClick={(() => scrollToSection('page'))}
                >Home</button>
                <button 
					className={`cursor-pointer ${
						activeSection === "about"
						? "text-purple-500 underline underline-offset-4"
                  		: "text-gray-700"
					}`}
                    onClick={() => scrollToSection('about')}
				>About</button>
                <button  
					className={`cursor-pointer ${
						activeSection === "lab"
						? "text-purple-500 underline underline-offset-4"
                  		: "text-gray-700"
					}`}
                    onClick={() => scrollToSection('lab')}
				>Lab</button>
            </div>
        </div>

        {isOpen && (
            <div
                id="skills"
                className="md:hidden bg-[#1A0B2E] backdrop-blur-md flex flex-col font-semibold hover:text-lg items-center gap-4 py-6 shadow-md text-lg"
            >
               <button onClick={() => scrollToSection('page')} className={`cursor-pointer ${activeSection === "page" ? "text-purple-500" : "text-white"}`}>Home</button>
                <button onClick={() => scrollToSection('about')} className={`cursor-pointer ${activeSection === "about" ? "text-purple-500" : "text-white"}`}>About</button>
                <button onClick={() => scrollToSection('lab')} className={`cursor-pointer ${activeSection === "lab" ? "text-purple-500" : "text-white"}`}>Lab</button>
            </div>
        )}
    </div>
  )
}

export default Navbar