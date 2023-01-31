"use strict";

module.exports = (sequelize, DataTypes) => {
  const Trips = sequelize.define("trips", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    trip_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    trip_time: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
  });
  return Trips;
};
