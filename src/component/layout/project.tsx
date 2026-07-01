import fashion from '../../assets/fashion.png'
import breed from '../../assets/dog-breed.png'
import ss from '../../assets/Screenshot 2022-09-30 at 10.49 3.png'
import icon from '../../assets/icon-park-solid_click.png'
//import shadow from "../../assets/Gradient.png"
import { motion } from "motion/react"

const Project = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className='md:px-[2%]'
    >
        <h2 className='project-title md:hidden text-purple-500 text-[2.1rem]'>Featured Project</h2>
        <div className='project-card md:flex md:relative'>
            <div className='md:w-1/2 '>
                <h4 className='text-purple-500 text-xl'>Featured Project</h4>
                <h1
                    className='text-[2.5rem] md:text-4xl'
                >Fashion Hub</h1>
                <p className='card my-12  md:absolute md:right-[45%] md:z-10 bg-transparent backdrop-blur-md shadow-md p-10 leading-loose rounded-xl md:text-lg shadow-[0_0_30px_rgba(0,0,0,0.4)]'>A web app for visualizing fashion data. View your various latest styles, materials, sewing equipements and detailed fashion information about each style. Add and purchase new items of recommended styles based on the existing trends and more.</p>
                <div className='project-url flex gap-4 md:absolute md:bottom-0 cursor-pointer'>
                   <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title='Live Demo'
                        href="https://fashion-hub-five.vercel.app/"
                        className='bg-[#8b5cf6] px-6 py-2 rounded-lg font-semibold hover:bg-transparent hover:border-purple-500 hover:border-1'
                    >
                        View Project
                   </motion.a>
                   <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title='Github Repo'
                        href="https://maracodez.github.io/FashionHub/"
                    >
                        <img src={icon} alt="" />
                    </motion.a>
                </div>
            </div>
            <div 
                className='project-image md:w-1/2 relative shadow-lg md:mt-4'
            >
                <img src={fashion} alt="" className='card-img absolute right-0 bottom-0 md:left-12 rounded-xl w-[93%] h-[90%]'/>
                <img src={ss} alt="" className='rounded-xl'/>
            </div>
        </div>
        <div className='project-card2 md:flex mt-14'>
            {/* <div className=' md:hidden '>
                <h4 className='text-purple-500 text-xl'>Featured Project</h4>
                <h1 className='text-4xl'>Dog Breed</h1>
                <p className='my-12 bg-[#432043] backdrop-blur-md shadow-md p-10 leading-loose rounded-xl text-xl'>A web app for visualizing animal(dog breed) specie. View your dog breeds, their specie, images, names and detailed information about each breed. Search desired dog breed which are not showcased on the dashboard and more.</p>
                <div className='flex cursor-pointer'>
                    <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title='Github Repo'
                        href="https://maracodez.github.io/dog-breed-api/"
                    >
                        <img src={icon} alt="" />
                    </motion.a>
                   <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title='Live Demo'
                        href="https://dog-breed-api-zeta.vercel.app/"
                    >
                        <img src={icon} alt="" />
                   </motion.a>
                </div>
            </div> */}
            <h1 className='project-scrn-title md:hidden text-[3rem]'>Dog Breed</h1>
            <div className='project-image2 md:w-1/2 relative shadow-lg'>
                <img src={breed} alt="" className='card-img absolute  right-12 bottom-0 left-0 rounded-xl w-[93%] h-[90%]'/>
                <img src={ss} alt="" className='rounded-xl'/>
            </div>
            <div className='project-2 w-1/2 text-right md:relative'>
                <h4 className='text-purple-500'>Featured Project</h4>
                <h1 className=' hidden md:block text-[3rem]'>Dog Breed</h1>
                <p className='card-2 my-14  md:absolute md:left-[-9%] md:z-10 bg-transparent backdrop-blur-md shadow-md p-10 leading-loose rounded-xl text-left shadow-[0_0_30px_rgba(0,0,0,0.4)]'>A web app for visualizing animal(dog breed) specie. View your dog breeds, their specie, images, names and detailed information about each breed. Search desired dog breed which are not showcased on the dashboard and more.</p>
                <div 
                    className='project-url2 flex gap-4 md:absolute md:bottom-0 md:right-0 cursor-pointer'
                >
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} 
                        title='Live Demo'
                        href="https://dog-breed-api-zeta.vercel.app/"
                        className='bg-[#8b5cf6] px-6 py-2 rounded-lg font-semibold hover:bg-transparent hover:border-purple-500 hover:border-1'
                    >
                        View Project
                   </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title='Github Repo'
                        href="https://maracodez.github.io/dog-breed-api/"
                    >
                        <img src={icon} alt="" />
                    </motion.a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Project