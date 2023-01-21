"use strict";

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define("orders", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    order_num: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },

    order_total_price: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    /**
     * 
     */
    order_status: {
      // type: DataTypes.ENUM,
      // values: ["waiting", "preparing", "delivering", "delivered", "cancelled"],
      // validate: {
      //   isIn: [
      //     ["waiting", "preparing", "delivering", "delivered", "cancelled"],
      //   ],
      // },
      type: DataTypes.INTEGER,

    },
  });
  return Orders;
};
