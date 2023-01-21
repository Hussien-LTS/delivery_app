"use strict";

module.exports = (sequelize, DataTypes) => {
  const FoodClassifications = sequelize.define("foodClassifications", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    food_classifications_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    food_classifications_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    food_classifications_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return FoodClassifications;
};
