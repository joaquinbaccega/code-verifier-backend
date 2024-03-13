import dotenv from 'dotenv';
import server from './src/server';
import { LogSuccess, LogError } from './src/utils/logger';

// * Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

// * Excecute SERVER

server.listen(port, () => {
  LogSuccess(`Server is running on http://localhost:${port}`);
});

// * Control SERVER ERROR

server.on ('error', (error) => {
  LogError(`Server error: ${error}`);
});