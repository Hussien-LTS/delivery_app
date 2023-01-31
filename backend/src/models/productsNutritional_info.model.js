"use strict";

module.exports = (sequelize, DataTypes) => {
  const ProductsNutritional_info = sequelize.define(
    "productsNutritional_info",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      product_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      
      estimated_calorie_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    }
  );
  return ProductsNutritional_info;
};
