import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import clerkWebhooks from "./controllers/clerk.webhooks.controller.js";
import { clerkMiddleware } from "@clerk/express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("API is working"));
app.use("/api/clerk", clerkWebhooks);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
