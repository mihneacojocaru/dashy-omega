import asyncHandler from 'express-async-handler';
import db from '../config/db.js';

const getAllEmployees = asyncHandler(async(req,res)=>{

    const all = await db.models.Employees.findAll();

    const error = new Error('There is no employee in the database');

    if(all.length == 0){
        throw error;
    }

    res.status(200).json(all);
});

const postNewEmployee = asyncHandler(async(req,res)=>{

    const {EmployeeID,Name,Title,HireDate,Country,ReportsTo,EmployeeImage} = req.body;

    const employee = await db.models.Employees.create({EmployeeID,Name,Title,HireDate,Country,ReportsTo,EmployeeImage});


    if(employee){
        res.status(201).json(employee);
    }else{
        res.status(400);
        throw new Error('Invalid user data - employee');
    }

});

export {getAllEmployees, postNewEmployee};