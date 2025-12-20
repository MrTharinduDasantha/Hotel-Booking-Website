import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: String, ref: "user", required: true },
    room: { type: String, ref: "room", required: true },
    hotel: { type: String, ref: "hotel", required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    guests: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },
    paymentMethod: { type: String, default: "Pay At Hotel", required: true },
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Booking =
  mongoose.models.booking || mongoose.model("booking", bookingSchema);

export default Booking;
