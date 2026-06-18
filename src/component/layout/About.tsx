//import React from 'react'
import { motion } from "motion/react"

const About = () => {
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
			<div className="leading-loose text-xl text-center md:text-left">
				I love turning design concepts into interactive digital experiences, and I'm always looking for new ways to write clean, efficient, and scalable code.
				Beyond building interfaces, I'm driven by the bigger picture-creating technology that truly improves lives. I believe great front-end development can bridge the gap between people and powerful tech. As I grow in the field, I aim to contribute to projects that promote accessibility, innovation, and inclusivity in tech. I see every line of code as a step toward making digital experiences more meaningful and impactful.
			</div>
		</motion.div>
    </div>
  )
}

export default About