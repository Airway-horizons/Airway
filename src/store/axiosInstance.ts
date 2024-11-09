// src/services/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // The base URL from .env
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Fetch token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and global error handling
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through the response if it's successful
  (error) => {
    const status = error.response?.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('authToken'); // Remove the token if expired
      window.location.href = '/login'; // Redirect to login page
    } else if (status >= 400 && status < 500) {
      alert(`Error: ${error.response?.data?.message}`);
    } else if (status >= 500) {
      alert('Server error, please try again later.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
