import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLoginData, reset } from '../Features/AuthSlice';
import { toast } from 'react-hot-toast';
import { Triangle } from 'react-loader-spinner';

const Login = () => {
    const [formFields, setFormFields] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formFields;
    const { isLoading, isError, isSuccess, authMessage } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleValue = (e) => {
        const { name, value } = e.target;
        setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error(authMessage);
            return;
        }
        dispatch(addLoginData({ username, password }));
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Login Successfully');
            navigate('/');
            dispatch(reset());
        }
        if (isError) {
            toast.error(authMessage);
            dispatch(reset());
        }
    }, [isSuccess, isError, authMessage, dispatch, navigate]);

    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
            <div className='bg-clip-padding p-8 rounded-xl shadow-md w-full backdrop-blur-lg backdrop-filter'>
                <h1 className='text-4xl text-center text-white font-semibold'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={username}
                        name='username'
                        onChange={handleValue}
                        type='text'
                        placeholder='Enter Username'
                        className='input input-bordered h-10 w-full'
                    />
                    <input
                        value={password}
                        name='password'
                        onChange={handleValue}
                        type='password'
                        placeholder='Enter Password'
                        className='input input-bordered h-10 w-full mt-2'
                    />
                    <button
                        className='flex btn btn-block justify-center gap-2 items-center mt-4'
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Triangle visible={true} height='30' width='30' color='white' />
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                <Link to='/signup' className='text-center hover:text-blue-300 hover:underline inline-block mt-2'>
                    Don't have an account?
                </Link>
            </div>
        </div>
    );
};

export default Login;
