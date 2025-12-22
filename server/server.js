import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";
import clerkWebhooks from "./controllers/clerk.webhooks.controller.js";
import stripeWebhooks from "./controllers/stripe.webhooks.controller.js";
import userRouter from "./routes/user.route.js";
import hotelRouter from "./routes/hotel.route.js";
import roomRouter from "./routes/room.route.js";
import bookingRouter from "./routes/booking.route.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// Listen to stripe webhooks
app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhooks
);

// Middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("API is working"));
app.use("/api/clerk", clerkWebhooks);
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
