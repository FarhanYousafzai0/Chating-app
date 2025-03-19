import React from 'react'

const Conversation = () => {
  return (
   <>
   
   <div className='flex items-center gap-5 p-4 rounded-lg  hover:bg-sky-500 cursor-pointer transition-all duration-300'>
      
      {/* Avatar with Online Status */}
      <div class="avatar avatar-online">
  <div class="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

      {/* User Info */}
     <div className='flex flex-1 items-center justify-between'>
     <div className='flex flex-col '>
        <h3 className='font-bold text-lg'>John Doe</h3>
        <p className='text-sm '>Last message preview...</p>
      </div>

      <p>😒</p>
     </div>

    </div>
   
   </>
    
  )
}

export default Conversation
