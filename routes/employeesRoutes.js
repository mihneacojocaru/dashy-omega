import express, { response } from 'express'
import {errorHandler} from "../middleware/errorMiddleware.js";

import { getAllEmployees, postNewEmployee} from "../controllers/employeesController.js";


const router = express.Router();


router.route('/')
.get(getAllEmployees,errorHandler)
.post(postNewEmployee,errorHandler);

export default router;
