import express from "express";
import {
  getBusServiceByid,
  getBusServices,
} from "../controller/busServices.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/get-bus-services", auth, getBusServices);
router.get("/get-bus-service-detail/:id", auth, getBusServiceByid);

export default router;
