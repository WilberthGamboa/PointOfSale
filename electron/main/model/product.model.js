import { Sequelize } from "sequelize";
import { sequelize } from "../db/database";

export const Product = sequelize.define('product', {
    productname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    barcode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false

    }
  });