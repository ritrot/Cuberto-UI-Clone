import { useState, useEffect, useRef } from 'react'

import { animate, motion  , MotionConfig} from "framer-motion"

const Development = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollRef = useRef(null);


    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };


    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walkX = (x - startX) * 2; // speed
        scrollRef.current.scrollLeft = scrollLeft - walkX;
    };

    const handleMouseUp = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleMouseLeave = (e) => {
        setIsDragging(false);
        e.preventDefault();
    };

    return (

        <MotionConfig
        initial={{transform:"translateY(100%)"}}
        whileInView={{transform:"translateY(0%)"}}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        >

        <div className='relative top-[28vw] text-white bg-[#161616] rounded-t-[5rem]'>
            <div className="title tracking-tight pt-[10vw] text-[12vw] pl-[160px] font-[300]">
                <div className="anitext"><motion.div initial={{transform:"translateY(100%)"}} className='font-[400] text-[9vw]'>Development</motion.div></div>
                <div className="anitext relative bottom-[6vw]"><motion.div initial={{transform:"translateY(100%)"}} className='font-[400] text-[9vw]'>and design</motion.div></div>
                <div className="anitext bottom-[12vw] relative"><motion.div initial={{transform:"translateY(100%)"}} className='font-[300]  text-[9vw]'>resources</motion.div></div>
            </div>

            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className='main pl-[160px] flex items-center gap-8 '>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
                <div className="kid">
                    <div className="ig">
                        <img className='rounded-[2rem]' src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" alt="" srcset="" />
                    </div>
                    <div className="price text-xl">How To Make Epic Website // Frontend development</div>
                </div>
            </div>

            <div className='p-[10vw] ' >
            <motion.div initial={{transform:"translateY(100%)"}} className='w-[27vw] text-[1.5vw] relative left-[50%] font-[400]'>
                    We regularly release design courses, offer advice to newbie designers, walk you through creating awesome effects, and share source files.              
                    <div ><button type="button" className='mt-[3vw] p-3 border-white border-solid border rounded-full text-[1.3vw] font-semibold'>VIEW ALL RESCOURCES</button></div>
                </motion.div>
            </div>
        </div>
        </MotionConfig>
    )
}

export default Development
