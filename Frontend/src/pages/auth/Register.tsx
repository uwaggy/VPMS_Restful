import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-300 via-green-200 to-green-100 px-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg max-w-md w-full rounded-2xl shadow-2xl p-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6 tracking-wide drop-shadow-md">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="relative">
    <input
      id="name"
      name="name"
      type="text"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder=" "
      className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-900"
      autoComplete="name"
    />
    <label
      htmlFor="name"
      className="absolute left-0 -top-5 text-sm text-green-600 
                 peer-placeholder-shown:top-2 
                 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 transition-all"
    >
      Full Name
    </label>
  </div>

  <div className="relative">
    <input
      id="email"
      name="email"
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder=" "
      className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-900"
      autoComplete="email"
    />
    <label
      htmlFor="email"
      className="absolute left-0 -top-5 text-sm text-green-600 
                 peer-placeholder-shown:top-2 
                 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 transition-all"
    >
      Email Address
    </label>
  </div>

  <div className="relative">
    <input
      id="password"
      name="password"
      type="password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder=" "
      className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-900"
      autoComplete="new-password"
    />
    <label
      htmlFor="password"
      className="absolute left-0 -top-5 text-sm text-green-600 
                 peer-placeholder-shown:top-2 
                 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 transition-all"
    >
      Password
    </label>
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
  >
    Sign Up
  </button>
</form>


        <p className="mt-8 text-center text-gray-700 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
