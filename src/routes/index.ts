/**
 * Root Router
 * Redirections to Routers
 */

import express, {Request, Response} from 'express'
import HelloRouter from '../routes/HelloRouter'
import { LogInfo } from '../utils/logger'

// Server instance

let server = express()

// Router Instance

let rootRouter = express.Router()

// Activate for request to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    res.send('Welcome to my first API with TypeScript and Express!')
  })

// Redirections to Routers & Controllers

server.use('/', rootRouter)
server.use('/hello', HelloRouter)
// Add more Routes here
export default server