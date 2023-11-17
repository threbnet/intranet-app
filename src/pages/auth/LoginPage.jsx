import React, { useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import bg from '../../assets/bg.mp4'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Replace 'username' and 'password' with your actual username and password values
    const validUsername = 'admin';
    const validPassword = 'admin';
  
    // Check if the entered username and password are valid
    if (username === validUsername && password === validPassword) {
      // Redirect the user to the '/search' route
      navigate('/dashboard')
    } else {
      // Display an error message or handle authentication failure
      console.log('Invalid username or password');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-8 lg:px-8">
      <video autoPlay loop muted src={bg}  className='-z-10 absolute w-full h-full object-cover object-center'/>
      <div className="max-w-md w-full px-8 space-y-8 rounded-lg border-2 bg-[#2d2b2b] bg-opacity-75 pb-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-100">
            TREBNET INTRANET <br />
            Log in 
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Username or Email address
            </label>
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent appearance-none border-2  relative block w-full px-3 py-3  placeholder-gray-400 text-gray-100 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username or Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent appearance-none relative block w-full px-3 py-3 border-2 placeholder-gray-400 text-gray-100 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#b33165] group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white  hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
            <div  className='text-center text-white hidden mt-4'>
            <span>Don't Have An Account ? <Link to="/auth/register/" className='text-blue-500'>Create Account</Link></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
