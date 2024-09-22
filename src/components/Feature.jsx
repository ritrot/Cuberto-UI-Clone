import { useState } from 'react'
import Cards from './Cards'
import CursorFollower from './CursorFollower'
import { animate, motion, MotionConfig } from "framer-motion"

const Feature = () => {
    const [enter, setenter] = useState(true)
    const Entered = () => {
        setenter(!enter);
    }

    return (
        <>
            <MotionConfig
                initial={{ transform: "translateY(100%)" }}
                whileInView={{ transform: "translateY(0%)" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <div
                    onMouseEnter={Entered}
                    onMouseLeave={Entered}
                    className='bg-[#161616] rounded-t-[5rem] text-white pl-[160px] p-[100px] relative top-[28vw]'>
                    <div className="title mb-12 text-[10vw] font-[400]">
                        <div className="anitext"><motion.div initial={{ transform: "translateY(100%)" }} >Featured</motion.div></div>
                        <div className='flex anitext items-center relative bottom-[110px]'>
                            <motion.div initial={{ transform: "translateY(100%)" }} ><video muted preload='true' loop autoPlay src="https://cuberto.com/assets/featured/header.mp4" className=' mt-20 object-cover w-[15vw] h-[10vw] mr-10 rounded-full'></video></motion.div>
                            <div className="anitext"><motion.div initial={{ transform: "translateY(100%)" }} >projects</motion.div></div>
                        </div>
                    </div>
                    <div className="cards flex gap-[4vw]">
                        <div className="ls flex flex-col gap-[7vw]">
                            <motion.Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>
                        <div className="rs flex flex-col gap-[7vw] mt-[20vw]">
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>

                    </div>

                </div>
                <CursorFollower enter={enter} />
            </MotionConfig>
        </>


    )
}

export default Feature
