import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home/Home';
import './App.css';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <div className="flex h-screen justify-center p-4 text-white items-center">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>~
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;

const NotFound = () => (
  <div className="text-center">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    <p className="text-lg mt-2">The page you're looking for doesn't exist.</p>
  </div>
);
