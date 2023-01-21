"use strict";

module.exports = (sequelize, DataTypes) => {
  const Rates = sequelize.define("rates", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    meal_rate_desc: {
      type: DataTypes.TEXT,
    },

    driver_rate_desc: {
      type: DataTypes.TEXT,
    },

    driver_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    
    meal_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
  });
  return Rates;
};
