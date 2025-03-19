import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-8 rounded-xl shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>

          <div className='flex items-center gap-1'>
            <h1 className='text-4xl text-center font-semibold text-white'>Signup</h1>
            <span className='text-4xl text-blue-500'>ChatingApp</span>
          </div>

          <form>
            {/* Full_Name */}
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Full Name</span>
              </label>
              <input type='text' placeholder='Enter FullName' className='input w-full input-bordered h-10' />
            </div>

            {/* Username */}
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Username</span>
              </label>
              <input type='text' placeholder='Enter Username' className='input w-full input-bordered h-10' />
            </div>

            {/* Password */}
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Password</span>
              </label>
              <input type='password' placeholder='Enter Password' className='input w-full input-bordered h-10' />
            </div>

            {/* Confirm Password */}
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Confirm Password</span>
              </label>
              <input type='password' placeholder='Confirm Password' className='input w-full input-bordered h-10' />
            </div>

            {/* Gender Selection */}
            <div className='mt-3'>
              <label className='label'>
                <span className='label-text text-base'>Gender</span>
              </label>
              <div className='flex gap-4'>
                <label className='flex items-center gap-2'>
                  <input type='checkbox' className='checkbox checkbox-xs checkbox-primary' />
                  Male
                </label>
                <label className='flex items-center gap-2'>
                  <input type='checkbox' className='checkbox checkbox-xs checkbox-secondary' />
                  Female
                </label>
              </div>
            </div>

            <a href='#' className='text-center mt-2 inline-block transition-all hover:text-blue-300 hover:underline'>
              Already have an account?
            </a>

            <div className='mt-2'>
              <button className='btn btn-block'>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
