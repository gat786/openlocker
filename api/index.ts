import express from "express";
import * as auth from "./controllers/auth";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Express + Typescript Server Running Baby");
});

app.use("/auth", auth.router);

app.listen(PORT, () => {
  console.log(`🔥Server Started at Port ${PORT}`);
});
