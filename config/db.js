import { Sequelize } from "sequelize";

import Orders from '../models/orders.js';
import Employees from "../models/employees.js";
import Customers from "../models/customers.js";

import dotenv from 'dotenv';

dotenv.config();

const connectDB = ()=>{
    try {
        
        let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, 
            {
              host: process.env.DB_HOST,
              dialect: process.env.DB_DIALECT
            }
        );

        let db={
            models:{}
        }

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        db.models.Orders = Orders(sequelize);
        db.models.Employees = Employees(sequelize);
        db.models.Customers = Customers(sequelize);

        return db;


    } catch (e) {
        throw new Error(e);
    }
}

let db = connectDB();

export default db;