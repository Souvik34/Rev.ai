import { generateContent } from "../services/ai.service.js";

export const getReview = async (req, res) => {
  try {
    const code = req.body.code?.trim();
    if (!code) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    

   
    const response = await generateContent(code);

    if (!response) {
      return res.status(500).json({ error: 'Failed to generate response' });
    }

    res.status(200).json({ message: response });
  } catch (error) {

    console.error('Error occurred in getResponse:', error);


    res.status(500).json({ error: 'Internal server error' });
  }
};
