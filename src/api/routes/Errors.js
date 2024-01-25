import express from "express";
import getAllErrors from "../controllers/getErrors.js";
import postError from "../controllers/postError.js";

const router = express.Router();

router.get('/getAllErrors', getAllErrors)
router.post('/postError', postError)

export default router;