import { useState, useEffect, useRef } from 'react'
import { animate, motion  , MotionConfig} from "framer-motion"

const Lastdrag = () => {
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
    <div className='relative top-[10vw]  '>
        <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className='mainlast pl-[100px] flex items-end gap-8 '>
            <div className="son w-[22vw] ">
                <div className="">
                    <img className='rounded-[1rem] ' src="https://cuberto.com/assets/smfeed/dribbble/original-b123a04c4e120b4366d70dd09958491e.png" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son  ">
                <div className="h-[20vw] w-[22vw]">
                    <img className='object-cover rounded-[1rem] h-[20vw] w-[22vw]' src="https://cuberto.com/assets/smfeed/instagram/455826004_3790725381192409_1715791500462447848_n.jpg" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son w-[22vw] ">
                <div className="">
                    <img className='rounded-[1rem] ' src="https://cuberto.com/assets/smfeed/dribbble/original-b123a04c4e120b4366d70dd09958491e.png" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son  ">
                <div className="h-[20vw] w-[22vw]">
                    <img className='object-cover rounded-[1rem] h-[20vw] w-[22vw]' src="https://cuberto.com/assets/smfeed/instagram/455826004_3790725381192409_1715791500462447848_n.jpg" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son w-[22vw] ">
                <div className="">
                    <img className='rounded-[1rem] ' src="https://cuberto.com/assets/smfeed/dribbble/original-b123a04c4e120b4366d70dd09958491e.png" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son  ">
                <div className="h-[20vw] w-[22vw]">
                    <img className='object-cover rounded-[1rem] h-[20vw] w-[22vw]' src="https://cuberto.com/assets/smfeed/instagram/455826004_3790725381192409_1715791500462447848_n.jpg" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son w-[22vw] ">
                <div className="">
                    <img className='rounded-[1rem] ' src="https://cuberto.com/assets/smfeed/dribbble/original-b123a04c4e120b4366d70dd09958491e.png" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>
            <div className="son  ">
                <div className="h-[20vw] w-[22vw]">
                    <img className='object-cover rounded-[1rem] h-[20vw] w-[22vw]' src="https://cuberto.com/assets/smfeed/instagram/455826004_3790725381192409_1715791500462447848_n.jpg" alt="" srcset="" />
                </div>
                <div className="price text-xl">cubertodesign</div>
            </div>

     
        </div>
    </div>
  )
}

export default Lastdrag
