import express from "express";
import { createTable, getTables, updateTable } from "../controllers/tables.js";

const router = express.Router();

router.post("/", createTable);
router.get("/", getTables);
router.put("/:id", updateTable);

export default router;
