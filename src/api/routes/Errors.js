import express from "express";
import getErrorsByDate from "../controllers/getErrorsByDate.js";
import postError from "../controllers/postError.js";
import deleteError from "../controllers/deleteError.js";

const router = express.Router();

router.get('/getErrorsByDate', getErrorsByDate)
router.post('/postError', postError)
router.delete('/deleteError', deleteError)

export default router;