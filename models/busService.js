import mongoose from "mongoose";

const BusServiceSchema = mongoose.Schema(
  {
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
    availableSeatsCount: {
      type: Number,
      required: true,
    },
    availableSeats: {
      type: [Number],
      required: true,
    },
    firstSeatNumber: {
      type: Number,
      required: true,
    },
    lastSeatNumber: {
      type: Number,
      required: true,
    },
    bookedSeats: {
      type: [Number],
      default: [],
    },
    bookedPassengers: {
      type: [
        {
          seatNumber: Number,
          gender: String,
        },
      ],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    busOperator: {
      type: String,
      required: true,
    },
    busLicensePlate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("busServices", BusServiceSchema);
