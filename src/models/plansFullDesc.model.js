"use strict";

module.exports = (sequelize, DataTypes) => {
  const PlansFullDesc = sequelize.define("plansFullDesc", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    contents_benefits: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    plan_benefits: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    number_of_calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  });
  return PlansFullDesc;
};
