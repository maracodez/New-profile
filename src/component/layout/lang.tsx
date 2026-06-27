import css from '../../assets/css.png'
import node from '../../assets/node.png'
import next  from '../../assets/next.png'
import js from '../../assets/js.png'
import editor from '../../assets/editor.png'
import react from '../../assets/react.png'
//import vector1 from '../../assets/Vector 25.png'
// import vector2 from '../../assets/Vector 30.png'
// import vector3 from '../../assets/Vector 28.png'
// import vector4 from '../../assets/Vector 27.png'
// import vector5 from '../../assets/Vector 29.png'
// import vector6 from '../../assets/Vector 25.png'
import gradient from '../../assets/Ellipse 22.png'
import oval from '../../assets/Ellipse 6.png'



const Lang = () => {
  return (
    <div className='my-[14%] '>
        <div className='flex flex-col items-center'>
            <p className='text-4xl md:text-3xl tracking-wider text-center'>I'm currently looking into join a <span className='text-purple-500'>cross-functional</span> team </p>
            <p className='text-lg text-center'>that values improving people's lives through accessible design</p>
            <div className='flex gap-8 mt-12 md:mt-8'>
                <div>
                    <img 
                        src={js}
                        alt="js icon" 
                    />
                    {/* <img 
                        src={vector3}
                        alt="js icon" 
                    /> */}
                </div>
                <div>
                    <img 
                        src={css}
                        alt="css icon" 
                    />
                    {/* <img 
                        src={vector5}
                        alt="css icon" 
                    /> */}
                </div>
                <div>
                    <img 
                        src={node} 
                        alt="node icon" 
                    />
                    {/* <img 
                        src={vector2} 
                        alt="node icon" 
                    /> */}
                </div>
                <div>
                    <img 
                        src={next}
                        alt="next icon" 
                    />
                    {/* <img 
                        src={vector4}
                        alt="next icon" 
                    /> */}
                </div>
                <div>
                    <img 
                        src={editor} 
                        alt="editor icon" 
                    />
                    {/* <img 
                        src={vector6} 
                        alt="editor icon" 
                    /> */}
                </div>
                <div>
                    <img 
                        src={react}
                        alt="react icon" 
                    />
                    {/* <img 
                        src={vector6}
                        alt="react icon" 
                    /> */}
                </div>
                <div>
                    <p className='font-bold text-purple-500 text-lg'>TS</p>
                </div>
            </div>
        </div>
        <div className='hidden w-1/2 mx-auto'>
           <img 
                src={oval}
                alt="react icon" 
            />
            <img 
                src={gradient}
                alt="react icon" 
            />
        </div>
    </div>
  )
}

export default Lang