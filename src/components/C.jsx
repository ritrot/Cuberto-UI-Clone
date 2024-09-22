import {useState} from 'react'
import { animate, motion  , MotionConfig} from "framer-motion"
import viteLogo from '/1.mp4'

const C = () => {

  const [btnhover, setbtnhover] = useState(true);

  return (
    <MotionConfig
    initial={{transform:"translateY(100%)"}}
    whileInView={{transform:"translateY(0%)"}}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    >
    <div className='relative top-[28vw]'>
      <div className='h-screen bg-black relative'><video muted preload='true' loop autoPlay src="https://cuberto.com/assets/showreel/short.mp4"></video></div>
      <div className='h-screen top-[8.1vw] flex relative mt-[4vw] mb-[17vw] p-[100px]'>
        <div className='videoc'>
            <video className='w-[900px]' muted preload='true' loop autoPlay src="http://localhost:5173/1.mp4"></video>
        </div>
        <motion.div initial={{transform:"translateY(50%)"}} className=' flex gap-14 flex-col justify-center items-center font-[400] p-[10vw] w-[90%] text-3xl'>
            <div>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</div>
            <div>
              <motion.button
              onMouseEnter={()=>{setbtnhover(!btnhover)}}
              onMouseLeave={()=>{setbtnhover(!btnhover)}}
              type="button" className='p-20 pl-[160px] pr-[160px] border-slate-950 {} border-solid border rounded-full'>What we do</motion.button></div>
        </motion.div>
      </div>
    </div>
    </MotionConfig>
  )
}

export default C
