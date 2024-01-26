import express from "express";
import getErrorsByDate from "../controllers/getErrorsByDate.js";
import postError from "../controllers/postError.js";

const router = express.Router();

router.get('/getErrorsByDate', getErrorsByDate)
router.post('/postError', postError)

export default router;