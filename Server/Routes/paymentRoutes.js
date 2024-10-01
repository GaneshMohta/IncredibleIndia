import express from 'express'
import { createOrder, verifyPayment } from '../controller/paymetController.js';


const router = express.Router();

router.post('/create-order',createOrder);
router.post('/verify-payment',verifyPayment);

export default router;
