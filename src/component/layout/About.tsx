//import React from 'react'
import { motion } from "motion/react"
import { useState, useEffect } from "react";

const About = () => {

	const [isMobile, setIsMobile] = useState(false);
        
    const [showMore, setShowMore] = useState(false);

        
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

  return (
    <div>
        <motion.div 
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
			className="mt-22 md:mx-8" id="about-me"
		>
			<h2 className="text-[2.2rem]">I am a passionate Front-End Web Developer.|</h2>
			<p className="text-lg mb-10 tracking-widest italic">with years of hands-on experience building responsive and user-focused web applications.</p>
			<div className="leading-loose text-xl text-left">
				I love turning design concepts into interactive digital experiences, and I'm always looking for new ways to write clean, efficient, and scalable code.
				Beyond building interfaces, I'm driven by the bigger picture-creating technology that truly improves lives.  <br className="md:hidden"/>
				{(showMore || !isMobile)  && <span className="mt-4"> I believe great front-end development can bridge the gap between people and powerful tech. As I grow in the field, I aim to contribute to projects that promote accessibility, innovation, and inclusivity in tech. I see every line of code as a step toward making digital experiences more meaningful and impactful.</span>}

				{isMobile && (
					<motion.button 
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }} 
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						onClick={() => setShowMore((prev) => !prev)}
						id="mode"
						className="bg-gradient-to-br from-[#130428] to-[#21113A] border-2 rounded-2xl border-[#2B1B4A] cursor-pointer mb-4 p-4"
					>
						{showMore ? "Show less" : "Read more"}
					</motion.button>    
				)}
			</div>
		</motion.div>
    </div>
  )
}

export default About