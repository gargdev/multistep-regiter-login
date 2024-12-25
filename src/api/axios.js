import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' }); // Update with your backend URL if deployed

export const registerUser = async (data) => {
  try {
    const response = await API.post('/register', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data; // Return the response data
  } catch (error) {
    // Handle the error and throw an appropriate message
    throw new Error(
      error.response?.data?.message || 'An error occurred during registration.'
    );
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await API.post('/login', formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data; // Return token and user details
  } catch (error) {
    // Handle errors and throw appropriate messages
    throw new Error(
      error.response?.data?.message || 'An error occurred during login.'
    );
  }
};
// export const registerUser = (formData) => API.post('/users/register', formData);
// export const loginUser = (formData) => API.post('/users/login', formData);

export default API;
