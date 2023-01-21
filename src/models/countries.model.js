"use strict";

module.exports = (sequelize, DataTypes) => {
  const Countries = sequelize.define("countries", {
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
   
  });

 
  return Countries;
};
