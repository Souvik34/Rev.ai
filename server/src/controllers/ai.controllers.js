import { generateContent } from "../services/ai.service.js";


export const getResponse = async (req, res) => {
    try{
        const prompt = req.query.prompt;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const response = await generateContent(prompt);
        if (!response) {
            return res.status(500).json({ error: 'Failed to generate response' });
        }

        res.status(200).json({ response });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}