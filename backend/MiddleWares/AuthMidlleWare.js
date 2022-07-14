import "dotenv/config";
import UserModel from "../Models/UserModel";
import jwt from "jsonwebtoken";

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
        next();
      } else {
        const user = await UserModel.findById(decodedToken.id);
        if (user)
          res.json({
            status: true,
            user: user.email,
          });
        else res.json({ status: false });
        next();
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};
