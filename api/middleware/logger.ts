import express from "express";

const preServe = (req: express.Request, res: express.Response, next: any) => {
  console.log(`${req.method} request arrived at ${req.path}`);
  next();
};

const postServe = (req: express.Request, res: express.Response, next: any) => {
  console.log(`returned a response ${res.statusCode}`);
  next();
};

export { preServe, postServe };
