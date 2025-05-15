// src/api.js
import axios from 'axios';

// Make sure this URL matches your backend endpoint, or use env variable
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getCodeReview = async (code) => {
  try {
    const response = await axios.post(`${BASE_URL}/review`, { code });
    return response.data.suggestions;  // assuming backend sends { suggestions: [...] }
  } catch (error) {
    console.error('Error fetching code review:', error);
    throw error;
  }
};
