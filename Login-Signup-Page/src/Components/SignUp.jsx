import React from 'react'

function SignUp({setOption , option}) {
  return (
    <div>
         
        <div className='formCont'>
            <input type="text" className='name' placeholder='Mobile Number or Email' />
            <input type="text" placeholder='Full Name' />
            <input type="number" placeholder='Phone number, usename, or email' />
            <input type="passord"  placeholder='Password' />

            <button className='btn' onClick={()=>{setOption(!(option))}}>Sign Up</button>
        </div>
        <p className='text'>Don't have an account ? <span onClick={()=>{setOption(!(option))}}>Sign up</span></p>
    </div>
  )
}

export default SignUp