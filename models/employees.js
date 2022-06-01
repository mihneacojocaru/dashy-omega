"use strict";
import bcrypt from "bcryptjs";
import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Employees extends Sequelize.Model {}
  Employees.init(
    {
      EmployeeID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Employee name can not be null!",
          },
          notEmpty: {
            msg: "Employee name can not be empty!",
          },
        },
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title can not be null!",
          },
          notEmpty: {
            msg: "Title can not be empty!",
          },
        },
      },
      HireDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "HireDate can not be null!",
          },
          notEmpty: {
            msg: "HireDate can not be empty!",
          },
        },
      },
      Country: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Country can not be null!",
          },
          notEmpty: {
            msg: "Country can not be empty!",
          },
        },
      },
      ReportsTo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ReportsTo can not be null!",
          },
          notEmpty: {
            msg: "ReportsTo can not be empty!",
          },
        },
      },
      EmployeeImage: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "EmployeeImage can not be null!",
          },
          notEmpty: {
            msg: "EmployeeImage can not be empty!",
          },
        },
      }
      
    },
    {
      sequelize,
      timestamps: false,
      updatedAt: false,
      tableName: "Employees",
    }
  );
  return Employees;
};
