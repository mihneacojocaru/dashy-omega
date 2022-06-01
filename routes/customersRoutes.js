import express, { response } from 'express'
import {errorHandler} from "../middleware/errorMiddleware.js";

import { getAllCustomers, postNewCustomer } from '../controllers/customersController.js';

const router = express.Router();

router.route('/')
.get(getAllCustomers,errorHandler)
.post(postNewCustomer,errorHandler);

export default router;
