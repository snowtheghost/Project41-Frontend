import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the token in the request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
