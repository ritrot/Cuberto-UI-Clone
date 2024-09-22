import React from 'react'
import Newday from './Newday'
import Linkscroll from './Linkscroll'

const Footer = () => {
  return (
    <div className='relative top-[28vw] text-white bg-black '>
        <div className='relative top-[-30vw]'><Newday title="Follow Us" hidden="hidden" w="min-w-fit" pl="pl-32"/></div>
        <div className='relative top-[-10vw]'><Linkscroll name="Instagram"/></div>
        <div className='relative top-[-10vw]'><Linkscroll name="Instagram"/></div>
        <div className='relative top-[-10vw]'><Linkscroll name="Instagram"/></div>
        <div className='relative top-[-10vw]'><Linkscroll name="Instagram"/></div>
        <div className='relative top-[-10vw]'><Linkscroll name="Instagram"/></div>
    </div>
  )
}

export default Footer
