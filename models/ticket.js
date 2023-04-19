import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    busServiceId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    departureCity: {
      type: String,
      required: true,
    },
    arrivalCity: {
      type: String,
      required: true,
    },
    departureTime: {
      type: Date,
      required: true,
    },
    arrivalTime: {
      type: Date,
      required: true,
    },
    seatNumber: {
      type: Number,
      required: true,
    },
    ticketOwner: {
      type: String,
      required: true,
    },
    ticketOwnerGender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("tickets", ticketSchema);
