"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the firts Route of APP
app.get('/', (req, res) => {
    res.send('Welcome to my first API with TypeScript and Express!');
});
// Define the firts Route of APP
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
// Execute APP and List Request to PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map