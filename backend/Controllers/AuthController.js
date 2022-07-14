import UserModel from "../Models/UserModel.js";

export const register = (req, res, next) => {};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.create({ email, password });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
