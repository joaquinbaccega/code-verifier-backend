import express, { Express, Request, Response } from "express";
// Enviroment Variables

// Security
import cors from "cors";
import helmet from "helmet";

// TODO: HTTPS

// Routes
import rootRouter from "../routes";

// Create Express App
const server: Express = express();
const port = process.env.PORT || 8000;

// Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// From this point onover: http://localhost:8000/api/...
server.use("/api", rootRouter);

// TODO: Mongoose Connection

// Security Config
server.use(helmet());
server.use(cors());

// Content type config:
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

// * Redirection config
// http://localhost:8000/ --> http://localhost:8000/api/
server.get("/", (req: Request, res: Response) => {
  res.redirect("/api");
});

export default server;
