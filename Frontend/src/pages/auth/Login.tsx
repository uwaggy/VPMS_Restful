import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FaCar } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-green-200 to-green-100 px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm max-w-md w-full rounded-xl shadow-lg p-8 md:p-10">
        <div className="flex items-center justify-center mb-6">
          <FaCar className="text-green-600 text-4xl animate-bounce" />
        </div>

        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Access your Vehicle Parking Management dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-900"
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5 text-sm text-green-600 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-900"
              autoComplete="current-password"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-5 text-sm text-green-600 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
            >
              Password
            </label>
          </div>

          {error && (
            <p className="text-center text-red-600 text-sm mt-1">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700 text-sm">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
