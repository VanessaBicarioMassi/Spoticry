import axios from 'axios';

const api = axios.create({
  baseURL: 'https://documenter.getpostman.com/view/20306176/2s9YJc23Ap',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
