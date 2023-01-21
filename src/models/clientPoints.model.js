"use strict";

module.exports = (sequelize, DataTypes) => {
  const ClientPoints = sequelize.define("clientPoints", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    client_points: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    client_points_date_used: {
      type: DataTypes.DATE,
    },
  });
  return ClientPoints;
};
