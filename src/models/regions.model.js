"use strict";

module.exports = (sequelize, DataTypes) => {
  const Regions = sequelize.define("regions", {
    region_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_Id: {
      type: DataTypes.INTEGER,
    },
  });

  return Regions;
};
