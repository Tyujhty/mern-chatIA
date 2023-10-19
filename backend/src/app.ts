import express from "express";
import { config } from "dotenv";
config();

const app = express();

//Middlewares
app.use(express.json());

export default app;