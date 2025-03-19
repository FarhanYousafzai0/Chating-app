import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className='bg-clip-padding p-8 rounded-xl shadow-md w-full backdrop-blur-lg backdrop-filter'>

<div className='flex gap-1 items-center'>
<h1 className='text-4xl text-center text-white font-semibold'>Login</h1>
            <span className='text-4xl text-blue-500'>ChatingApp</span>
            </div>
            <form>
              
        <div> 
        <label className='p-2 label'>
            <span className='text-base label-text'>Username</span>
        </label>

<input type='text' placeholder='Enter Username' className='input input-bordered h-10 w-full'></input>
        </div>
        <div> 
        <label className='p-2 label'>
            <span className='text-base label-text'>Password</span>
        </label>

<input type='text' placeholder='Enter Password' className='input input-bordered h-10 w-full'></input>
        </div>
     
       <Link to='/signup'  className='hover:text-blue-300 hover:underline inline-block mt-2 transition-all'>Don't have account?</Link>
      
<div className='mt-2'>

    <button className='btn btn-block'>Login</button>
</div>
            </form>


        </div>
      
    </div>
  )
}

export default Login
