"use strict";

module.exports = (sequelize, DataTypes) => {
  const Permissions = sequelize.define("permissions", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    
    permission_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  });
  return Permissions;
};
