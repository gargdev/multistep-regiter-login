import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' }); // Update with your backend URL if deployed

// Add a request interceptor if you want to include a token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (formData) => API.post('/users/register', formData);
export const loginUser = (formData) => API.post('/users/login', formData);

export default API;
