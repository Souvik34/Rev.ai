// src/api.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

export const getCodeReview = async (code) => {
  try {
    const response = await axios.post(`${BASE_URL}/ai/get-review`, { code });

    // ✅ The backend sends a raw string (not { suggestions: [...] })
    const rawText = response.data;

    // ✅ Split it into lines and filter empty ones
    const suggestions = rawText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    return suggestions;
  } catch (error) {
    console.error('Error fetching code review:', error);
    throw error;
  }
};
