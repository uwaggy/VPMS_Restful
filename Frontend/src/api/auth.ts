import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const authApi = {
  setAuthToken: (token: string | null) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  },

  login: (email: string, password: string) => {
    return axios.post(`${API_URL}/auth/login`, { email, password });
  },

  register: (data: { name: string; email: string; password: string }) => {
    return axios.post(`${API_URL}/auth/register`, data);
  },

  getCurrentUser: () => {
    return axios.get(`${API_URL}/auth/me`);
  },
};

export default authApi; 