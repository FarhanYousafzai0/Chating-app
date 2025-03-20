import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSignUpData, reset } from '../Features/AuthSlice';
import { toast } from 'react-hot-toast';
import { Triangle } from 'react-loader-spinner';

const Signup = () => {
  const [formFields, setFormFields] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { fullName, username, password, confirmPassword, gender } = formFields;

  const { isLoading, isError, isSuccess, authMessage, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    dispatch(addSignUpData(formFields));
  };

  useEffect(() => {
    if (isSuccess && user) {
      toast.success('Signup Successful!');
      setFormFields({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
      });

      navigate('/'); // Redirect to home page
      dispatch(reset());
    }

    if (isError) {
      toast.error(authMessage);
      dispatch(reset());
    }
  }, [isSuccess, isError, authMessage, user, dispatch, navigate]);

  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='bg-clip-padding p-8 rounded-xl shadow-md w-full backdrop-blur-lg backdrop-filter'>
        <div className='flex gap-1 items-center'>
          <h1 className='text-4xl text-center text-white font-semibold'>Signup</h1>
          <span className='text-4xl text-blue-500'>ChatingApp</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              name='fullName'
              value={fullName}
              onChange={handleChange}
              placeholder='Enter Full Name'
              className='input input-bordered h-10 w-full'
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
              placeholder='Enter Username'
              className='input input-bordered h-10 w-full'
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder='Enter Password'
              className='input input-bordered h-10 w-full'
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
              className='input input-bordered h-10 w-full'
            />
          </div>

          <div className='mt-3'>
            <label className='label'>
              <span className='text-base label-text'>Gender</span>
            </label>
            <div className='flex gap-4'>
              <label className='flex gap-2 items-center'>
                <input
                  type='radio'
                  name='gender'
                  value='Male'
                  checked={gender === 'Male'}
                  onChange={handleChange}
                  className='radio radio-primary'
                />
                Male
              </label>
              <label className='flex gap-2 items-center'>
                <input
                  type='radio'
                  name='gender'
                  value='Female'
                  checked={gender === 'Female'}
                  onChange={handleChange}
                  className='radio radio-secondary'
                />
                Female
              </label>
            </div>
          </div>

          <Link
            to='/login'
            className='text-center hover:text-blue-300 hover:underline inline-block mt-2 transition-all'
          >
            Already have an account?
          </Link>

          <div className='mt-2'>
            <button
              type='submit'
              className='flex btn btn-block justify-center gap-2 items-center'
              disabled={isLoading}
            >
              {isLoading ? (
                <Triangle
                  visible={true}
                  height="30"
                  width="30"
                  color="white"
                  ariaLabel="triangle-loading"
                />
              ) : (
                'Signup'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
