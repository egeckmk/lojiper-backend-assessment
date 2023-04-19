import mongoose from "mongoose";
import busServiceModel from "../models/busService.js";
import ticketModel from "../models/ticket.js";
import { seedBusServices } from "../seeds/busServicesSeeder.js";
import ticket from "../models/ticket.js";

mongoose.connect(process.env.MONGODB_URL);

const connection = mongoose.connection;

connection.on("connected", async () => {
  // Activate the following line for test data.
  // busSeeder();

  // Reset tickets data
  // resetticket();
  console.log("MongoDB connection is successful.");
});

connection.on("error", (err) => {
  console.log(`Error in MongoDB connection \n Error: ${err}`);
});

const busSeeder = async () => {
  await busServiceModel.deleteMany({});
  await busServiceModel.insertMany(seedBusServices);
};

const resetticket = async () => {
  await ticketModel.deleteMany({});
};

export default mongoose;
