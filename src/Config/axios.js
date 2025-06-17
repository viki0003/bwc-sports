import axios from 'axios';
import BASE_API_URL from './Config';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is not 401 or request has already been retried, reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      // Attempt to refresh the token
      const response = await axios.post(`${BASE_API_URL}/token/refresh/`, {
        refresh: refreshToken,
      });

      const { access } = response.data;
      localStorage.setItem('accessToken', access);

      // Update the original request with new token
      originalRequest.headers.Authorization = `Bearer ${access}`;
      
      // Retry the original request
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      // If refresh token fails, clear storage and redirect to login
      localStorage.clear();
      window.location.href = '/';
      return Promise.reject(refreshError);
    }
  }
);

export default axiosInstance; 