import express from "express";
import PingController from "../controllers/ping";
import { Body, Get, Post, Route, Request } from "tsoa";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.post("/ping/create", async (_req: any, res) => {
  const controller = new PingController();
  const response = await controller.createMessage(_req);
  return res.send(response);
});

export default router;
