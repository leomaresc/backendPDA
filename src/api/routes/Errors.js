import Express from "express";
import getAllErrors from "../controllers/getErrors.js";
import postError from "../controllers/postError.js";

const router = Express.Router();

router.get('/', getAllErrors)
router.post('/', postError)

export default router;