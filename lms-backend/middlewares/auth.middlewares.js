import jwt from "jsonwebtoken";

import AppError from "../utils/appError.js";
import asyncHandler from "./asyncHandler.middlewares.js";

export const isLoggedIn = asyncHandler(async (req, res, next) => {
  // extracting token from the cookies
  const { token } = req.cookies;

  if (!token) {
    return next(new AppError("Unauthorized, please login to continue", 401));
  }

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return next(new AppError("Unauthorized, please login to continue", 401));
  }
  req.user = decoded;

  next();
});
