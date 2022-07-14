import UserModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "Dipak Paudel secret key", {
    expiresIn: maxAge,
  });
};
export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      withCredentials: true,
      HttpOnly: false,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ user: user._id, created: true, token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const login = async (req, res, next) => {};
