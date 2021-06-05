import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Express + Typescript Server Running Baby");
});

app.listen(PORT, () => {
  console.log(`🔥Server Started at Port ${PORT}`);
});
