import React from 'react'
import img from '../assets/logo.png'
function  Image({src}) {
  return (
    <div className='imgCont'>
   <img src={img} alt="" className='logo'/>
    </div>
  )
}

export default  Image