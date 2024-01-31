import express from "express";
import { createTable } from "../controllers/Tables.js";

const router = express.Router();

router.post("/", createTable);
export default router;
