import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

const MessageContiane = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col p-1 '>
        {/* Header */}

        <div className='bg-black/50 px-6 py-2 mb-2 rounded-lg'>
            <span className='label-text text-white'></span>
            <span className='text-white font-semibold'>Farhan</span>

        </div>


        {/* Message-Container */}

        <Message/>


        {/* Message Input */}
      <MessageInput/>
    </div>
  )
}

export default MessageContiane
