"use strict";

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },

    product_number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },

    product_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    product_imgs: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    product_points: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    product_price_without_tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },

    product_tax: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    product_price_with_tax: {
      // can  add it manually
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },
  });
  return Products;
};
