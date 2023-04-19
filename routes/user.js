import express from "express";
import { check } from "express-validator";
import { register, login } from "../controller/user.js";
import { validateUser } from "../middlewares/validator.js";

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").notEmpty().isEmail(),
    check("password", "Password is required").notEmpty(),
    check("age", "Age is required").notEmpty(),
    check("gender", "Gender is required").notEmpty(),
    check("phone", "Phone is required").notEmpty(),
  ],
  validateUser,
  register
);
router.post("/login", login);

export default router;
