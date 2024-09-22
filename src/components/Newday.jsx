import { useState, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Newday = (props) => {
  //           // gsap.to(".child",{
  //           //   transform:"trnslate(-100%)",
  //           //   repeat:-1,
  //           //   duration:4,
  //           //   ease:"none"
  //           // })
  // useEffect(() => {

  //     window.addEventListener("wheel" , (x)=>{
  //           // if(x.deltaY>0){

  //           // }
  //           // if(x.deltaY<0){

  //           // }

  //     })
  //  }, [])
  return (
    <div>
      <div className='h-screen relative font-semibold top-[30vw] w-full flex overflow-hidden gap-5 '>
        <div className=' dad min-w-full text-[12vw] text-center  font-thin h-[25vw] flex justify-center items-center '>
          <div className={`child  ${props.w} flex gap-16 ${props.pl}  justify-center items-center  font-[Roboto Flex, sans-serif]`}>
            <div>{props.title}</div>
            <video className={`object-cover w-[16vw] ${props.hidden}  rounded-full`} muted preload='true' loop autoPlay src="https://cuberto.com/assets/home/hero/header.mp4"></video>
          </div>
          <div className={`child  ${props.w} flex gap-16 ${props.pl}  justify-center items-center  font-[Roboto Flex, sans-serif]`}>
            <div>{props.title}</div>
            <video className={`object-cover w-[16vw] ${props.hidden}  rounded-full`} muted preload='true' loop autoPlay src="https://cuberto.com/assets/home/hero/header.mp4"></video>
          </div>
          <div className={`child  ${props.w} flex gap-16 ${props.pl}  justify-center items-center  font-[Roboto Flex, sans-serif]`}>
            <div>{props.title}</div>
            <video className={`object-cover w-[16vw] ${props.hidden}  rounded-full`} muted preload='true' loop autoPlay src="https://cuberto.com/assets/home/hero/header.mp4"></video>
          </div>
          <div className={`child  ${props.w} flex gap-16 ${props.pl}  justify-center items-center  font-[Roboto Flex, sans-serif]`}>
            <div>{props.title}</div>
            <video className={`object-cover w-[16vw] ${props.hidden}  rounded-full`} muted preload='true' loop autoPlay src="https://cuberto.com/assets/home/hero/header.mp4"></video>
          </div>

        </div>
      </div>
    </div>
  )
}






// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// const Newday = () => {
//   useEffect(() => {
//     // Throttle function to limit how often the scroll function is called
//     const throttle = (func, delay) => {
//       let lastCall = 0;
//       return (...args) => {
//         const now = new Date().getTime();
//         if (now - lastCall < delay) return;
//         lastCall = now;
//         return func(...args);
//       };
//     };

//     // Initialize ScrollTrigger
//     const scrollAnimation = (direction) => {
//       gsap.to(".child", {
//         x: direction > 0 ? "-200%" : "0%",
//         repeat: -1,
//         ease: "none",
//         duration: 5,
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % 200)  // Keeps the value within 0% to 200%
//         }
//       });
//     };

//     const handleScroll = throttle((event) => {
//       const direction = event.deltaY > 0 ? 1 : -1;
//       scrollAnimation(direction);
//     }, 500); // 200ms throttle delay

//     window.addEventListener("wheel", handleScroll);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []); // Empty dependency array ensures this runs only on mount/unmount

//   return (
//     <div className='relative top-[-10vw]'>
//       <div className='h-screen  w-full'></div>
//       <div className='h-screen w-full flex overflow-hidden gap-5'>
//         <div className='bg-black dad min-w-full text-[12vw] text-center font-thin h-[20vw] flex items-center'>
//           <div className='child h-[80%] min-w-[120%] bg-slate-500 font-[Roboto Flex, sans-serif] will-change-transform'>I am king ok ok</div>
//           <div className='child h-[80%] min-w-[120%] bg-slate-500 font-[Roboto Flex, sans-serif] will-change-transform'>I am king ok ok</div>
//           <div className='child h-[80%] min-w-[120%] bg-slate-500 font-[Roboto Flex, sans-serif] will-change-transform'>I am king ok ok</div>
//         </div>
//       </div>
//       <div className='h-screen w-full'></div>
//     </div>
//   );
// };

export default Newday

