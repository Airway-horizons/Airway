import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { localStorageUtil } from 'src/utils/helper';

const apiUrl = import.meta.env.VITE_HOST_API;

// Define custom type that extends AxiosRequestConfig
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  formUpload?: boolean;
}

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: apiUrl, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authorization token and set Content-Type based on formUpload
axiosInstance.interceptors.request.use(
  (config: any) => {
    const token: any = localStorageUtil.getItem('airWayData'); // Fetch token from localStorage
    if (token?.data?.token) {
      config.headers.Authorization = `Bearer ${token?.data?.token}`; // Add token if available
    }

    // If formUpload is true, change the Content-Type to 'multipart/form-data'
    if (config?.data instanceof FormData) {
      // For FormData, we let the browser set the Content-Type header
      delete config.headers['Content-Type'];
    } else if (config?.formUpload) {
      // If formUpload flag is true, set the Content-Type to 'multipart/form-data'
      config.headers['Content-Type'] = 'multipart/form-data';
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
    return Promise.reject(error); // Reject the error for further handling in RTK Query
  }
);

// Update axiosBaseQuery function to use the custom type for config
const axiosBaseQuery = ({
  url,
  method,
  data,
  formUpload,
}: {
  url: string;
  method: string;
  data?: any;
  formUpload?: boolean | undefined;
}) => {
  const config: CustomAxiosRequestConfig = {
    url,
    method,
    data,
    formUpload,
  };

  return axiosInstance(config)
    .then((response: AxiosResponse) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error?.response?.data };
    });
};

export default axiosInstance;
export { axiosBaseQuery };
