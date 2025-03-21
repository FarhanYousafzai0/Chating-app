import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import {TiMessages} from 'react-icons/ti'

const MessageContiane = () => {
  const [selected, setSelected] = useState(true); // Changed to 'false' by default

  return (
    <div className='md:min-w-[450px] flex flex-col p-1'>
      {selected ? (
        <>
          {/* Header */}
          <div className='bg-black/50 px-6 py-2 mb-2 rounded-lg'>
            <span className='text-white font-semibold'>Farhan</span>
          </div>

          {/* Message-Container */}
          <Message />

          {/* Message Input */}
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessageContiane;

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
     <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋Farhan ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
    </div>
  )
}

