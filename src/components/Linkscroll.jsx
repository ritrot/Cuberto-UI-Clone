import React from 'react'
import { animate, motion, MotionConfig } from "framer-motion"

const Linkscroll = (props) => {
  return (
    <>
    <motion.div
    initial={{opacity:1}}
    whileHover={{opacity:0}}
    transition={{ duration: 0.8}}
     className='bg-black border-solid border-[0.1px] border-l-0 border-white p-12 text-3xl z-10 absolute w-full'>{props.name}</motion.div>    
    <div
    className='text-black border-solid bg-white border-[0.1px] border-l-0  p-12 z-0 relative boy text-3xl overflow-hidden list-none flex '>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>
      <li>{props.name}</li>

    </div>
    </>
  )
}

export default Linkscroll
