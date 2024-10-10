// src/redux/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { login, register, logout, fetchUser } from './authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  // Function to handle user login
  const loginUser = async (email, password) => {
    try {
      await dispatch(login({ email, password })).unwrap();
      return true;
    } catch (err) {
      console.error('Login failed:', err);
      return false;
    }
  };

  // Function to handle user registration
  const registerUser = async (name, email, password) => {
    try {
      await dispatch(register({ name, email, password })).unwrap();
      return true;
    } catch (err) {
      console.error('Registration failed:', err);
      return false;
    }
  };

  // Function to handle user logout
  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    loading,
    error,
    login: loginUser,
    register: registerUser,
    logout: logoutUser,
  };
};
