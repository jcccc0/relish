//import express, { Router } from "express";
//import serverless from "serverless-http";
var express, { Router } =  require("express");
var serverless =  require("serverless-http");

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

router.post('/relish', (req, res) => {
res.send({"Body:", req.body, "Headers:" , req.headers})
})

api.use("/api/", router);

export const handler = serverless(api);
