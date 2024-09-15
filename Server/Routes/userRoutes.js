import express from 'express'
import {createUser ,login} from '../controller/userController.js'

const router = express.Router();

router.post("/sign-up",createUser);
router.post("/login",login)

export default router;
