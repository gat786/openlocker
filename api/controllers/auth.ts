import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Requested recieved at login");
});

router.get("/register", (req, res) => {
  res.send("Request received at Sign up");
});

export { router };
