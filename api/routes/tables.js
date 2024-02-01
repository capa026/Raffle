import express from "express";
import { createTable, getTables } from "../controllers/tables.js";

const router = express.Router();

router.post("/", createTable);
router.get("/", getTables);

export default router;
