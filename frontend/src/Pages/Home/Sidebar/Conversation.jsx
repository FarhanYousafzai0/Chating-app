import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../Features/UserSlice';

const Conversation = () => {
  const dispatch = useDispatch();
  const { list: users, isLoading, isError, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); // Added dependency array

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error}</p>;

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className='flex items-center gap-5 p-4 rounded-lg hover:bg-sky-500 cursor-pointer transition-all duration-300'
        >
          {/* Avatar with Online Status */}
          <div className="avatar avatar-online">
            <div className="w-14 rounded-full">
              <img src={user.profilePic || '/default-avatar.png'} alt={user.name} />
            </div>
          </div>

          {/* User Info */}
          <div className='flex flex-1 items-center justify-between'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-lg'>{user.name}</h3>
              <p className='text-sm'>Last message preview...</p>
            </div>

            <p>😒</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Conversation;
