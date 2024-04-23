import express from "express";
import getGrocers from "../controllers/getGrocers.js";

const router = express.Router();

router.get('/getGrocers', getGrocers)

export default router;