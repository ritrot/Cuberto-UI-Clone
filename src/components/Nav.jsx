import React from 'react'

const Nav = () => {
  return (
    
    <div className='p-6 flex items-center justify-between relative'>
      <div className="left"><img className='w-[6vw]' src="data:image/png;base64,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" alt="" /></div>
      <div className="right flex gap-5 text-[1.2vw]">
        <div>menu</div>
        <div>logo</div>
      </div>
    </div>
  )
}

export default Nav
