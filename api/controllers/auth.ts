import express, { json } from "express";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN } from "../constants";

const router = express.Router();

router.post("/login", (req, res, next) => {
  res.send("Requested recieved at login");
  next();
});

router.post("/register", (req, res, next) => {  
  jwt.sign(req.body, "VERYHARDSECRET",{expiresIn :  JWT_EXPIRES_IN})
  res.send("Thank you");
  next();
});

export { router };
