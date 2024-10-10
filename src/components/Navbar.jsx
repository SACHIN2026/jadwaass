// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  
  // Access user and loading state from Redux store
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">Blog App</Link>
        <div className="flex items-center">
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : user ? (
            <>
              <Link to="/create" className="mx-2 text-gray-600 hover:text-gray-800">Create Post</Link>
              <button 
                onClick={handleLogout} 
                className="mx-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mx-2 text-gray-600 hover:text-gray-800">Login</Link>
              <Link to="/register" className="mx-2 text-gray-600 hover:text-gray-800">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
