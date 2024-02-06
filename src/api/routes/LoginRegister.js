import express from "express";
import getUsers from "../controllers/getUsers.js";
import login from "../controllers/login.js";
import register from "../controllers/register.js";

const router = express.Router();

router.get('/getUsers', getUsers)
router.post('/Login', login)
router.post('Register', register)

export default router;