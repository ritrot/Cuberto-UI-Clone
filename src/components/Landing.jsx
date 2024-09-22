import { useState } from 'react'
import CursorFollower from './CursorFollower';
import { animate, motion  , MotionConfig} from "framer-motion"

const Landing = () => {

  const [enter, setenter] = useState(true)
  const Entered = () => {
    setenter(!enter);
  }

  return (
    <MotionConfig
    initial={{transform:"translateY(100%)"}}
    whileInView={{transform:"translateY(0%)"}}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    >
    
    <div className=' bottom-6 h-[100px] ml-[9vw] font-[350] text-[7.5vw] p-[50px] relative'>
      <div className='anitext'><motion.div initial={{transform:"translateY(100%)"}}>We are a digital</motion.div></div>
      <div className="anitext relative bottom-16">
        <motion.div initial={{transform:"translateY(100%)"}} className='flex'>
          <div
            onMouseEnter={Entered}
            onMouseLeave={Entered}
            className=' top-10 relative '>
            <video className='object-cover w-[10vw] mr-4 rounded-full' muted preload='true' loop autoPlay src="https://cuberto.com/assets/home/hero/header.mp4"></video>
          </div>
          <div className='anitext'><div initial={{transform:"translateY(100%)"}}>design and</div></div>
        </motion.div>
      </div>
      <div className='anitext relative bottom-[8vw]'><motion.div initial={{transform:"translateY(100%)"}}>motion agency</motion.div></div>
      <CursorFollower land={enter} />
    </div>
    </MotionConfig>

  )
}

export default Landing
