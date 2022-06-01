import asyncHandler from 'express-async-handler';
import db from '../config/db.js';

const getAllCustomers = asyncHandler(async(req,res)=>{

    const all = await db.models.Customers.findAll();

    const error = new Error('There is no customer in the database');

    if(all.length == 0){
        throw error;
    }

    res.status(200).json(all);
});

const postNewCustomer = asyncHandler(async(req,res)=>{

    const {CustomerID,CustomerName,CustomerEmail,CustomerImage,ProjectName,Status,StatusBg,Weeks,Budget,Location} = req.body;

    const customer = await db.models.Customers.create({CustomerID,CustomerName,CustomerEmail,CustomerImage,ProjectName,Status,StatusBg,Weeks,Budget,Location});


    if(customer){
        res.status(201).json(customer);
    }else{
        res.status(400);
        throw new Error('Invalid user data - customers');
    }
});

export {getAllCustomers, postNewCustomer};