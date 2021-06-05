import express from "express";
import * as auth from "./controllers/auth";
import * as logMiddleware from "./middleware/logger";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Express + Typescript Server Running Baby");
});

app.use(express.json());
app.use(logMiddleware.preServe);
app.use("/auth", auth.router);
app.use(logMiddleware.postServe);

app.listen(PORT, () => {
  console.log(`🔥Server Started at Port ${PORT}`);
});
