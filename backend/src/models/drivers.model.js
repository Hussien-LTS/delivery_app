"use strict";

module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define("driver", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    driver_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    driver_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    driver_full_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!");
      },
    },

    driver_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    driver_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
      },
    },

    driver_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],
      },
    },

    driver_license_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    driver_vehicle_license_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    driver_vehicle_plate_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    driver_id_number: {
      type: DataTypes.STRING,
      unique: true,
    },

    driver_car_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    driver_allowed_order_num_at_same_time: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_number_of_completed_orders: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_number_of_canceled_orders: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_full_balance: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_delivery_fee: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_receivables_balance: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_token: {
      type: DataTypes.STRING,
      default: "",
    },

    driver_account_status: {
      // type: DataTypes.ENUM,
      // values: ["0", "1"],
      // defaultValue: "1",
      // validate: {
      //   isIn: [["0", "1"]],
      // },
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },

    driver_evaluation: {
      type: DataTypes.INTEGER,
    },
  });
  return Driver;
};
