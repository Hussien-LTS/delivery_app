"use strict";

module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define("Plans", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    subscription_plan_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    subscription_plan_brief_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    plan_distribution: {
      type: DataTypes.INTEGER,
      // type: DataTypes.ENUM,
      // values: ["breakfast", "lunch", "dinner"],
    },
    trips_ENUM: {
      // type: DataTypes.ENUM,
      // values: ["1","2","3"],
      // validate: {
      //   isIn: [["1","2","3"]],
      // },
      type: DataTypes.INTEGER,
    },
  });
  return Plans;
};
