import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
 // Import your logout action
import { Link, useNavigate } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { logout, reset } from '../../../Features/AuthSlice';

const Logout = () => {
  const {isLoading} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());  // Clear user data from Redux store
    dispatch(reset());   // Reset state after logout
    localStorage.removeItem('user'); // Clear token from local storage
    navigate('/login');   // Redirect to login page
  };

  return (
    <div className='mt-auto' onClick={handleLogout}>
     { isLoading ? (
      <Triangle
      visible={true}
      height="30"
      width="30"
      color="white"
      ariaLabel="triangle-loading"/>
     ): (
      <TbLogout2 className='h-6 text-white w-6 cursor-pointer' />
     )}
    </div>
  );
};

export default Logout;
