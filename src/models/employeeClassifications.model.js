"use strict";

module.exports = (sequelize, DataTypes) => {
  const EmployeeClassifications = sequelize.define("employeeClassifications", {
    emp_code: {
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
  return EmployeeClassifications;
};
