import express from "express";
import {
  buyTicket,
  getTicketDetails,
  getUserTickets,
} from "../controller/ticket.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/buy-ticket", auth, buyTicket);
router.get("/get-user-tickets/:userId", auth, getUserTickets);
router.get("/get-ticket-details/:id", auth, getTicketDetails);

export default router;
