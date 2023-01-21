"use strict";

module.exports = (sequelize, DataTypes) => {
  const Discounts = sequelize.define("discounts", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    discount_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    discount_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    
    discount_valid_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
  });
  return Discounts;
};
