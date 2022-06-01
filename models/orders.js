"use strict";
import bcrypt from "bcryptjs";
import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Orders extends Sequelize.Model {}
  Orders.init(
    {
      OrderID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      CustomerName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "CustomerName can not be null!",
          },
          notEmpty: {
            msg: "CustomerName can not be empty!",
          },
        },
      },
      TotalAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "TotalAmount can not be null!",
          },
          notEmpty: {
            msg: "TotalAmount can not be empty!",
          },
        },
      },
      OrderItems: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "OrderItems can not be null!",
          },
          notEmpty: {
            msg: "OrderItems can not be empty!",
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
      ProductImage: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ProductImage can not be null!",
          },
          notEmpty: {
            msg: "ProductImage can not be empty!",
          },
        },
      }
      
    },
    {
      sequelize,
      timestamps: false,
      updatedAt: false,
      tableName: "Orders",
    }
  );
  return Orders;
};
