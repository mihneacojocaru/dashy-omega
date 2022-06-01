"use strict";
import bcrypt from "bcryptjs";
import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Customers extends Sequelize.Model {}
  Customers.init(
    {
      CustomerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      CustomerName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "CustomerName name can not be null!",
          },
          notEmpty: {
            msg: "CustomerName name can not be empty!",
          },
        },
      },
      CustomerEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "CustomerEmail can not be null!",
          },
          notEmpty: {
            msg: "CustomerEmail can not be empty!",
          },
        },
      },
      CustomerImage: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "CustomerImage can not be null!",
          },
          notEmpty: {
            msg: "CustomerImage can not be empty!",
          },
        },
      },
      ProjectName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ProjectName can not be null!",
          },
          notEmpty: {
            msg: "ProjectName can not be empty!",
          },
        },
      },
      Status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Status can not be null!",
          },
          notEmpty: {
            msg: "Status can not be empty!",
          },
        },
      },
      StatusBg: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "StatusBg can not be null!",
          },
          notEmpty: {
            msg: "StatusBg can not be empty!",
          },
        },
      },
      Weeks: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Weeks can not be null!",
          },
          notEmpty: {
            msg: "Weeks can not be empty!",
          },
        },
      },
      Budget: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Budget can not be null!",
          },
          notEmpty: {
            msg: "Budget can not be empty!",
          },
        },
      },
      Location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Location can not be null!",
          },
          notEmpty: {
            msg: "Location can not be empty!",
          },
        },
      },  
    },
    {
      sequelize,
      timestamps: false,
      updatedAt: false,
      tableName: "Customers",
    }
  );
  return Customers;
};
