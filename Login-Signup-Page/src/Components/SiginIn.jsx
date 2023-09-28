import React from 'react'

function SiginIn({setOption}) {
  return (
    <div>
        <div className='formCont'>
            <input type="text" placeholder='Phone number, usename, or email' className='name'/>
            <input type="passord" placeholder='Password' className='password'/>
           <button className='btn' onClick={()=>{setOption(false)}}>Sign In</button>
        </div>
        <p className='text'>Don't have an account ? <span onClick={()=>{setOption(false)}}>Sign up</span></p>
    </div>
  )
}

export default SiginIn