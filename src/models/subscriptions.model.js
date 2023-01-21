"use strict";

module.exports = (sequelize, DataTypes) => {
  const Subscriptions = sequelize.define("subscriptions", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    subscription_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    subscription_valid_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },

    subscription_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subscription_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    subscription_meal_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },

    subscription_points: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    savings_percentage: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
  });
  return Subscriptions;
};
