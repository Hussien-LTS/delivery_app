"use strict";

module.exports = (sequelize, DataTypes) => {
  const PromoCoupons = sequelize.define("promoCoupons", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    promo_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    promo_code: {
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

    promo_valid_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
  });
  return PromoCoupons;
};
