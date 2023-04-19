import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
