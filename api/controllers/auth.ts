import express from "express";

const router = express.Router();

router.post("/login", (req, res, next) => {
  res.send("Requested recieved at login");
  next();
});

router.post("/register", (req, res, next) => {  
  res.send("Request received at Sign up");
  next();
});

export { router };
