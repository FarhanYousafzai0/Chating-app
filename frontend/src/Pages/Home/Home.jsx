import React from 'react'
import Search from './Sidebar/Search'
import Conversation from './Sidebar/Conversation'
import Logout from './Sidebar/Logout'
import Sidebar from './Sidebar'
import MessageContiane from './Message/MessageContiane'

const Home = () => {
  return (
    <div className='flex h-[300px] p-4 md:h-[550px] rounded-xl shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>

     
    
     <Sidebar/>
     <MessageContiane/>
    

    </div>
  )
}

export default Home
