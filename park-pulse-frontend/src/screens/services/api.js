import axios from 'axios';

// This points to the backend server (Sathya's part)
// Use http://10.0.2.2:5000/api if using Android Emulator
const BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;