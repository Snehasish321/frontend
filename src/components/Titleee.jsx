import React from 'react'

const Titleee = ({text1,text2,text3}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-600'>{text1} <span className='text-red-600 font-medium'>{text2}</span><span className='text-gray-600'>{text3}</span></p>
      
    </div>
  )
}

export default Titleee