import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";


// Configuration the .env file

dotenv.config();


// Create Express App
const app: Express = express();
const port = process.env.PORT || 8000;

// Define the firts Route of APP
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my first API with TypeScript and Express!');
});

// Define the firts Route of APP
app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Execute APP and List Request to PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});