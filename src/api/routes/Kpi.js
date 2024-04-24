import express from "express";
import getKpi from "../controllers/getKpi.js";

const router = express.Router();

router.post('/getKpi', getKpi)

export default router;