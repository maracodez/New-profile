import bglight from '../../assets/light.png'
import task from '../../assets/coffee.png'
import starred from "../../assets/star.png"
import tech from '../../assets/techquest logo.jpeg'
import shadow from "../../assets/Gradient.png"
import { motion } from 'motion/react'


const lab = () => {

	// const cardVariants = {
	// 	hdden: { opacity: 0, y: 50 },
	// 	visible: (index: number) => ({
	// 		opacity: 1,
	// 		y: 0,
	// 		transition: {
	// 			delay: index * 0.2,
	// 			duration: 0.6,
	// 			ease: "easeOut"
	// 		}
	// 	})
	// }
  return (
    <div 
		
		className="mt-22 md:px-[2%] md:relative z-0"
	>
		<h1 className="text-4xl font-semibold">Development Journey</h1>
		<img 
			src={shadow} 
			alt={shadow} 
			className="hidden md:block md:w-[50%] md:absolute items-center mx-[20%] z-[-1]"
		/>
		<motion.div 
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0}}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				delay: 0.15,
				duration: 0.6,
				ease: "easeOut"
			}}
			className="md:flex md:flex-wrap md:gap-x-4 md:mt-8"
		>
			<div className="bg-gradient-to-br from-[#130428] to-[#21113A] border-2 border-[#2B1B4A] rounded-2xl shadow-lg p-8 mt-12 md:w-[48%] flex gap-2 md:gap-4">
				<img 
					src={tech} 
					alt="" 
					className="w-[30%] md:w-1/4 rounded-xl"
				/>
				<div>
					<h1 className="font-bold text-4xl">Techquest</h1>
					<p className="leading-tight text-lg py-4">Built responsive frontend components and collaborated on modern web interfaces using frontend frameworks.</p>
					<a 
						href="https://github.com/maracodez" 
						target="_blank" 
						rel="noopener noreferrer"
						className="border-1 bg-[#21113A] border-[#2B1B4A] py-2 px-4 rounded-xl cursor-pointer hover:bg-[#2B1B4A] hover:border-purple-500"
					>Learn More</a>
				</div>
			</div>
			<div className="bg-gradient-to-br from-[#1A0F2E] to-[#21113A] border-2 border-[#2B1B4A] rounded-2xl shadow-lg p-4 md:p-8 mt-12 md:w-[50%] flex gap-2 md:gap-4">
				<img 
					src={task} 
					alt="" 
					className=" w-1/4 h-42"
				/>
				<div>
					<h1 className="font-bold text-3xl md:text-4xl">Personal Project</h1>
					<p className="leading-tight text-lg py-4">Developed a full-stack task management application with CRUD functionality, and responsive UI</p>
					<a 
						href="https://github.com/maracodez" 
						target="_blank" 
						rel="noopener noreferrer"
						className="border-1 bg-[#21113A] border-[#2B1B4A] py-2 px-4 rounded-xl cursor-pointer hover:bg-[#2B1B4A] hover:border-purple-500"
					>Learn More</a>
				</div>
			</div>
			<div className="bg-gradient-to-br from-[#1A0F2E] to-[#21113A] border-2 border-[#2B1B4A] rounded-2xl shadow-lg p-4 md:p-8 mt-12 md:w-[48%] flex gap-2 md:gap-4">
				<img 
					src={bglight} 
					alt="" 
					className="w-1/4 h-42"
				/>
				<div>
					<h1 className="font-bold text-2xl md:text-4xl">Portfolio Website</h1>
					<p className="md:leading-tight text-lg py-4">A responsive personal site showcasing projects, skills, and experience with clear UI, smooth navigation, and optimized performance.</p>
					<a 
						href="https://github.com/maracodez" 
						target="_blank" 
						rel="noopener noreferrer"
						className="border-1 bg-[#21113A] border-[#2B1B4A] py-2 px-4 rounded-xl cursor-pointer hover:bg-[#2B1B4A] hover:border-purple-500"
					>Learn More</a>
				</div>
			</div>
			<div className="bg-gradient-to-br from-[#1A0F2E] to-[#21113A] border-2 border-[#2B1B4A] rounded-2xl shadow-lg p-8 mt-12 md:w-[50%] flex md:gap-4">
				<img 
					src={starred} 
					alt="" 
					className="w-1/4 h-42"
				/>
				<div>
					<h1 className="font-bold text-3xl">E-Commerce Dashboard</h1>
					<p className="md:leading-tight text-lg py-4">A real time admin interface for managing sales, products, and analytics with an intuitive, data driven UI.</p>
					<a 
						href="https://github.com/maracodez" 
						target="_blank" 
						rel="noopener noreferrer"
						className="border-1 bg-[#21113A] border-[#2B1B4A] py-2 px-4 rounded-xl cursor-pointer hover:bg-[#2B1B4A] hover:border-purple-500"
					>Learn More</a>
				</div>
			</div>
		</motion.div>

    </div>
  )
}

export default lab