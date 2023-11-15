import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to track if the input fields are focused
  const [isFocused, setIsFocused] = useState({
    firstname: false,
    lastname: false,
    username: false,
    email: false,
    password: false,
  });

   // Function to check password strength and generate suggestions
   const checkPasswordStrength = (password) => {
    // Add your password strength logic here
    // For example, you can check length, uppercase, lowercase, digits, special characters, etc.
    // Generate suggestions accordingly
    if (password.length < 8) {
      return 'Password should be at least 8 characters long.';
    } else if (!/[A-Z]/.test(password)) {
      return 'Include at least one uppercase letter.';
    } else if (!/[a-z]/.test(password)) {
      return 'Include at least one lowercase letter.';
    } else if (!/\d/.test(password)) {
      return 'Include at least one digit.';
    } else if (!/[@$!%*?&#]/.test(password)) {
      return 'Include at least one special character (e.g., @$!%*?&#).';
    } else {
      return 'Password is strong!';
    }
  };

  const passwordStrength = checkPasswordStrength(password);

  // State to track email format validation
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Function to check email format
  const validateEmail = (email) => {
    // Use a regular expression to check if the email format is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle the registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5F008B] py-12 px-4 sm:px-8 lg:px-8">
      <div className="max-w-md w-full space-y-8 px-10 bg-white  rounded-lg pb-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create a <i className='text-[#5F008B]'>Free</i> Panda account Now!
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname" className="sr-only">
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              autoComplete="name"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, firstname: true })}
              onBlur={() => setIsFocused({ ...isFocused, firstname: false })}
              className={`appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                isFocused.firstname ? 'border-indigo-500' : 'border-gray-300'
              }`}
              placeholder="First Name"
            />
            {isFocused.firstname && (
              <p className="text-sm text-gray-500 mt-2">
                Enter your first name as is on your National ID.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastname" className="sr-only">
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              autoComplete="name"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, lastname: true })}
              onBlur={() => setIsFocused({ ...isFocused, lastname: false })}
              className={`appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                isFocused.lastname ? 'border-indigo-500' : 'border-gray-300'
              }`}
              placeholder="Last Name"
            />
            {isFocused.lastname && (
              <p className="text-sm text-gray-500 mt-2">
                Enter your last name as is on your National ID.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              User Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, username: true })}
              onBlur={() => setIsFocused({ ...isFocused, username: false })}
              className={`appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                isFocused.username ? 'border-indigo-500' : 'border-gray-300'
              }`}
              placeholder="@username"
            />
            {isFocused.username && (
              <p className="text-sm text-gray-500 mt-2">
                Enter a username ! could be a Nick Name.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, email: true })}
              onBlur={() => setIsFocused({ ...isFocused, email: false })}
              className={`appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                isFocused.email ? 'border-indigo-500' : 'border-gray-300'
              } ${
                !isEmailValid ? 'border-red-500' : '' // Add red border for invalid email format
              }`}
              placeholder="Email address"
            />
            {isFocused.email && (
              <p className="text-sm text-gray-500 mt-2">
                Enter your active email address.
              </p>
            )}
            {!isEmailValid && (
              <p className="text-sm text-red-500 mt-2">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, password: true })}
              onBlur={() => setIsFocused({ ...isFocused, password: false })}
              className={`appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                isFocused.password ? 'border-indigo-500' : 'border-gray-300'
              }`}
              placeholder="Password"
            />
            {isFocused.password && (
              <p className={`text-sm ${
                passwordStrength === 'Password is strong!' ? 'text-green-500' : 'text-red-500'
              } mt-2`}>
                {passwordStrength}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#5F008B] group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white     hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            <div className="text-center mt-4">
              <span>
                Already Have An Account?{' '}
                <Link to="/auth/login/" className="text-blue-500">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
