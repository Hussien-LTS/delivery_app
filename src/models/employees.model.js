"use strict";

module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define("employees", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    emp_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    emp_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    emp_full_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.emp_first_name} ${this.emp_last_name}`;
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    },

    emp_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },

    emp_birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },

    emp_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],
      },
    },

    emp_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
      },
    },

    // 1 -> n
    emp_classification_code: {
      type: DataTypes.INTEGER,
    },

    emp_role: {
      // type: DataTypes.ENUM,
      // values: ["admin", "cashier", "employee"],
      // defaultValue: "employee",
      // validate: {
      //   isIn: [["admin", "cashier", "employee"]],
      // },
      type: DataTypes.INTEGER,

    },

    emp_account_status: {
      // type: DataTypes.ENUM,
      // values: ["0", "1"],
      // default: "1",
      // validate: {
      //   isIn: [["0", "1"]],
      // },
      type: DataTypes.INTEGER,

    },

    emp_token: {
      type: DataTypes.STRING,
      default: "",
    },
  });
  return Employees;
};
