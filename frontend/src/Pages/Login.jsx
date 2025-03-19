import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-8 rounded-xl shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg '>

<div className='flex items-center gap-1'>
<h1 className='text-4xl text-center font-semibold text-white'>Login</h1>
            <span className='text-4xl text-blue-500 '>ChatingApp</span>
            </div>
            <form>
              
        <div> 
        <label className='label p-2 '>
            <span className='label-text text-base'>Username</span>
        </label>

<input type='text' placeholder='Enter Username' className='input w-full input-bordered h-10'></input>
        </div>
        <div> 
        <label className='label p-2 '>
            <span className='label-text text-base'>Password</span>
        </label>

<input type='text' placeholder='Enter Password' className='input w-full input-bordered h-10'></input>
        </div>
     
       <a href='#' className='mt-2 inline-block transition-all hover:text-blue-300 hover:underline'>Don't have account?</a>
      
<div className='mt-2'>

    <button className='btn btn-block'>Login</button>
</div>
            </form>


        </div>
      
    </div>
  )
}

export default Login
