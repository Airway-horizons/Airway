// src/services/axiosInstance.ts
import axios from 'axios';

const apiUrl = import.meta.env.VITE_HOST_API;

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: apiUrl, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Fetch token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token if available
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // const status = error.response?.status;
    // if (status === 401 || status === 403) {
    //   localStorage.removeItem('authToken'); // Remove the token if expired
    //   window.location.href = '/login'; // Redirect to login page
    // } else if (status >= 400 && status < 500) {
    //   alert(`Error: ${error.response?.data?.message}`);
    // } else if (status >= 500) {
    //   alert('Server error, please try again later.');
    // }
    return Promise.reject(error); // Reject the error for further handling in RTK Query
  }
);

const axiosBaseQuery = ({ url, method, data }: { url: string; method: string; data?: any }) => {
  return axiosInstance({
    url,
    method,
    data,
  })
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error?.response?.data };
    });
};

export default axiosInstance;
export { axiosBaseQuery };
