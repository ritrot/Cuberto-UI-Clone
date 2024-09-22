import {useState} from 'react'
import { animate, motion } from "framer-motion"

const Cards = () => {
  // const [enter, setenter] = useState(true)
  // const Entered = () => {
  //     setenter(!enter);
  // }
  return (
    <motion.div
    initial={{transform:"translateY(30%)"}}
    
    whileInView={{transform:"translateY(0%)"}}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className='relative flex gap-7 flex-col text-white  w-[31vw]'>
        <div
        // onMouseEnter={Entered}
        // onMouseLeave={Entered}
        className="vid">
          <motion.div
          initial={{opacity:1}}
          whileHover={{ opacity:0 }}
          transition={{ duration: 0.5 }}
          className='absolute z-20 rounded-[3rem]'>
            <img className=' rounded-[3rem]' src="https://cuberto.com/assets/projects/kzero/cover.jpg" alt="" /></motion.div>
            <video muted preload='true' className=' rounded-[3rem]' loop autoPlay src="https://cuberto.com/assets/projects/puntopago/cover.mp4"></video>
        </div>
        <div className="content w-[65%] text-2xl">
            <span className='font-semibold'>Riyadh</span> - Official website of Riyadh , Saudi Arabia's capital
        </div>
      
    </motion.div>
  )
}

export default Cards
