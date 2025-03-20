import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addLoginData, reset } from '../Features/AuthSlice';

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formFields;

  const { isLoading, isError, isSuccess, authMessage } = useSelector((state) => state.auth);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    const addLogin = {
      username,
      password,
    };

    dispatch(addLoginData(addLogin));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Login Successfully');
      setFormFields({
        username: '',
        password: '',
      });
      dispatch(reset());
    }
    if (isError) {
      toast.error(authMessage || 'Something went wrong. Please try again.');
      dispatch(reset());
    }
  }, [isSuccess, isError, authMessage, dispatch]);

  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='bg-clip-padding p-8 rounded-xl shadow-md w-full backdrop-blur-lg backdrop-filter'>

        {/* Header */}
        <div className='flex gap-1 items-center'>
          <h1 className='text-4xl text-center text-white font-semibold'>Login</h1>
          <span className='text-4xl text-blue-500'>ChatingApp</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              value={username}
              name='username'
              onChange={handleValue}
              type='text'
              placeholder='Enter Username'
              className='input input-bordered h-10 w-full'
            />
          </div>

          {/* Password */}
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              value={password}
              name='password'
              onChange={handleValue}
              type='password'
              placeholder='Enter Password'
              className='input input-bordered h-10 w-full'
            />
          </div>

          {/* Signup Link */}
          <Link
            to='/signup'
            className='hover:text-blue-300 hover:underline inline-block mt-2 transition-all'
          >
            Don't have an account?
          </Link>

          {/* Login Button with Loader */}
          <div className='mt-2'>
            <button
              className='flex btn btn-block justify-center gap-2 items-center'
              disabled={isLoading}
            >
              {isLoading && <span className='loading loading-spinner'></span>}
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
