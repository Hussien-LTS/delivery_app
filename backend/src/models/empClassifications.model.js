"use strict";

module.exports = (sequelize, DataTypes) => {
  const EmpClassifications = sequelize.define("empClassifications", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    emp_classification_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return EmpClassifications;
};
