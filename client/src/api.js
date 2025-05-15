// src/api.js
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';


export const getCodeReview = async (code) => {
  try {
    const response = await axios.post('http://localhost:4000/ai/get-review', { code });
    return response.data.suggestions;
  } catch (error) {
    console.error('Error fetching code review:', error);
    throw error;
  }
};
