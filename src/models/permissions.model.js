"use strict";

module.exports = (sequelize, DataTypes) => {
  const Permissions = sequelize.define("permissions", {
    permission_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Permissions;
};
