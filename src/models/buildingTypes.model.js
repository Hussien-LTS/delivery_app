"use strict";

module.exports = (sequelize, DataTypes) => {
  const BuildingTypes = sequelize.define("buildingType", {
 
    building_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  });
  return BuildingTypes;
};
