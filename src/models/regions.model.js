"use strict";

module.exports = (sequelize, DataTypes) => {
  const Regions = sequelize.define("regions", {
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
  });

  return Regions;
};
