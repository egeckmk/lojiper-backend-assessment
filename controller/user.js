import userModel from "../models/user.js";
import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

// @desc    Register new user.
// @route   POST /api/user/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(409).send({
        message: "User already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = new UserModel(req.body);
    newUser.save();
    return res.status(201).send({
      message: "User created successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error creating user.", error: err });
  }
};

// @desc    Authenticate a user.
// @route   POST /api/user/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found.`",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).send({ message: "Password is incorrect." });
    }

    const token = jsonwebtoken.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res.status(200).send({ message: "Login successfully.", token: token });
  } catch (err) {
    return res.status(500).send({ message: "Error logging in.", error: err });
  }
};
