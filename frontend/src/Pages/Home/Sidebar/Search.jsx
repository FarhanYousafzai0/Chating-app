import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <form>
        <div className='flex items-center gap-2'>
       
       <input type='text' placeholder='Search' className='border text-sm block w-full p-2.5 pr-10 bg-black/50 text-white border-gray-600 placeholder-gray-400 outline-none focus:ring-2 rounded-full h-10'/>
       
       <button type='submit' className='btn btn-circle flex items-center justify-center bg-sky-500 hover:bg-black group text-white'>
                       <IoSearchSharp className='w-6 h-6 outline-none group-hover:text-white' />
                   </button>
           </div>
           <div className=' divider px-3'></div>
    </form>
  )
}

export default Search
