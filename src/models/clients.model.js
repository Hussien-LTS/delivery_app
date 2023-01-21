"use strict";

module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("clients", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    client_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    client_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    client_full_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.client_first_name} ${this.client_last_name}`;
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!");
      },
    },

    client_birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },

    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },

    client_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],
      },
    },

    client_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
      },
    },

    client_completed_orders_count: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    client_cancelled_orders_count: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    client_completed_orders_value: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    client_last_seen: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },

    client_points: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    client_gender: {
      type: DataTypes.INTEGER,
   
      // type: DataTypes.ENUM,
      // values: ['active', 'inactive', 'pending'],
      // allowNull: false,
      // defaultValue: 'pending',
      // validate: {
      //   isIn: [['active', 'inactive', 'pending']],
      // },
    },

    client_account_status: {
      // type: DataTypes.ENUM,
      // values: ["0", "1"],
      // validate: {
      //   isIn: [["0", "1"]],
      // },
      type: DataTypes.INTEGER,
     
    },

    client_token: {
      type: DataTypes.STRING,
      default: "",
    },
  });
  return Clients;
};
