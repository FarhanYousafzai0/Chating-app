import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <Link to='/login' className='mt-auto'>
      <TbLogout2 className='h-6 text-white w-6 cursor-pointer'/>
    </Link>
  )
}

export default Logout
