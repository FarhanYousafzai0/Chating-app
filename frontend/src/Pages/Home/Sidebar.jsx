import React from 'react'
import Search from './Sidebar/Search'
import Conversation from './Sidebar/Conversation'
import Logout from './Sidebar/Logout'

const Sidebar = () => {
  return (
    <div className='px-6 py-4 border-r border-slate-500 flex flex-col'>
       <Search/>
      <Conversation/>
      <Logout/>
    </div>
  )
}

export default Sidebar
