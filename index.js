import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
import "./config/db.js";
import userRoutes from "./routes/user.js";
import busServicesRoutes from "./routes/busServices.js";
import ticketRoutes from "./routes/ticket.js";

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/bus-service", busServicesRoutes);
app.use("/api/ticket", ticketRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
