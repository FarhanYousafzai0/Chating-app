import React from 'react'
import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className=' my-3 relative flex items-center'>
      <input
        type='text'
        className='border text-sm rounded-lg block w-full p-2.5 pr-10 bg-black/50 text-white border-gray-600 placeholder-gray-400 outline-none focus:ring-2 '
        placeholder='Send a message'
      />
      <button
        type='submit'
        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white  transition-all duration-300'
      >
        <BsSend className='text-xl' />
      </button>
    </form>
  )
}

export default MessageInput
