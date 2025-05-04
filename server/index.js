import express from 'express';

const app = express();


import dotenv from 'dotenv';
dotenv.config({
    path:'./.env'
});


import aiRouter from './src/routes/ai.routes.js';
app.use(express.json());
app.use('/ai', aiRouter);



const PORT = process.env.PORT || 4000;

app.listen(PORT,()=> {
    console.log(`Server running at:`, PORT)
})