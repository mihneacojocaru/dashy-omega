import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import db from "./config/db.js";

import path from 'path'
import ordersRoutes from './routes/ordersRoutes.js';
import employeesRoutes from './routes/employeesRoutes.js';
import customersRoutes from './routes/customersRoutes.js';

import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

const port = 5000;

const __dirname=path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the REST API project!',
    });
});

app.use('/api/v1/orders', ordersRoutes);
app.use('/api/v1/employees', employeesRoutes);
app.use('/api/v1/customers', customersRoutes);
// app.use('/api/v1/courses', coursesRoutes);
// app.use('/api/v1/courseDetails', courseDetailsRoutes);

app.use(express.static(path.join(__dirname,'/frontend/build')));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
});

app.use(errorHandler);


app.listen(process.env.PORT||5000 , async () => {
    console.log(`Server up on http://localhost:${port}/`);
    await db.sequelize.sync();
    //await db.sequelize.sync({ force: true });
    console.log("Database Connected!");
});
    