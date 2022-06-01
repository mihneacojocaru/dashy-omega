import express, { response } from 'express'
import {errorHandler} from "../middleware/errorMiddleware.js";

import { getAllOrders, postNewOrder } from '../controllers/ordersController.js';


const router = express.Router();


router.route('/')
.get(getAllOrders,errorHandler)
.post(postNewOrder,errorHandler);

export default router;
