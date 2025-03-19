import React from 'react'

const Message = () => {
  return (
    <>
      <div className='flex-1 h-[400px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-[#0F9E99] scrollbar-track-transparent'>
        <div className='chat chat-end'>
          <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS chat bubble component'
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              />
            </div>
          </div>
          <div className='chat-header'>
            Anakin
            <time className='text-xs opacity-50'>12:46</time>
          </div>
          <div className='chat-bubble chat-bubble-info'>I hate you!</div>
          <div className='chat-footer opacity-50'>Seen at 12:46</div>
        </div>

        {/* Add more messages to test scrolling */}
       


        
      </div>
    </>
  )
}

export default Message



