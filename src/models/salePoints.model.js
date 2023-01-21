"use strict";

module.exports = (sequelize, DataTypes) => {
  const SalePoints = sequelize.define("salePoints", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    sale_point_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sale_point_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    sale_point_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
      },
    },

    sale_point_phone_number2: {
      type: DataTypes.STRING,
      validate: {
        is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
      },
    },

    sale_point_Tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },

    sale_point_points_val: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      validate: {
        min: 0,
      },
    },

    sale_point_delivery_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  });
  return SalePoints;
};
