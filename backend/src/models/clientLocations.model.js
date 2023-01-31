"use strict";

module.exports = (sequelize, DataTypes) => {
  const ClientLocations = sequelize.define("clientLocation", {
    client_location_lang: {
      type: DataTypes.INTEGER,
      validate: {
        min: -180,
        max: 180,
      },
    },

    client_location_lat: {
      type: DataTypes.INTEGER,
      validate: {
        min: -90,
        max: 90,
      },
    },

    client_street_name: {
      type: DataTypes.STRING,
    },

    building_num: {
      type: DataTypes.STRING,
    },

    floor_num: {
      type: DataTypes.STRING,
    },

    flat_num: {
      type: DataTypes.STRING,
    },

    well_known_place: {
      type: DataTypes.STRING,
    },
  });

  return ClientLocations;
};
