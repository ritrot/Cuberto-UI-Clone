import React from 'react'
import { animate, motion, MotionConfig } from "framer-motion"

const Pihlosopy = () => {
    return (
        <MotionConfig
        initial={{transform:"translateY(100%)"}}
        whileInView={{transform:"translateY(0%)"}}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        >

        <div className='relative top-[28vw] rounded-t-[5rem] pl-[160px] p-[100px] '>
            <div className="title mt-7 text-[12vw] font-[300]">
                <div className="anitext"><motion.div initial={{ transform: "translateY(100%)" }} className='font-[400] text-[11vw]'>Our</motion.div></div>              
                <div className='flex  items-center relative bottom-[110px]'>
                    <div className="anitext"><motion.div initial={{ transform: "translateY(100%)" }} className='font-[300]'>philosophy</motion.div></div>
                </div>
            </div>
            <div className='h-screen  flex relative gap-20'>
                <div className='w-[36vw]'>
                    <video muted  preload='true' loop autoPlay src="https://cuberto.com/assets/home/summary/2.mp4?3"></video>
                </div>
                <div className='pt-[5vw]  flex gap-14 flex-col   font-[400] text-2xl w-[40%]'>
                <motion.div initial={{ transform: "translateY(100%)" }}>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</motion.div>
                </div>
            </div>

        </div>
        </MotionConfig>
    )
}

export default Pihlosopy
