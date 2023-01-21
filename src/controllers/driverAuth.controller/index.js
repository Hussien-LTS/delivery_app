"use strict";
const bcrypt = require("bcrypt");
const driversModel = require("../../models").Drivers;

// REGISTER DRIVER Handler
const httpSignUpDriverHandler = async (req, res) => {
  try {
    const {
      driver_first_name,
      driver_last_name,
      driver_img,
      driver_phone_number,
      driver_password,
      driver_license_number,
      vehicle_license_number,
      vehicle_plate_number,
      driver_car_type,
      allowed_order_num_at_same_time,
    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const data = {
      driver_first_name,
      driver_last_name,
      driver_img,
      driver_phone_number,
      driver_license_number,
      vehicle_license_number,
      vehicle_plate_number,
      driver_car_type,
      allowed_order_num_at_same_time,
      driver_password: await bcrypt.hash(driver_password, salt),
    };
    const newEmp = await employeesModel.create(data);
    if (newEmp) {
      return res
        .status(201)
        .json({ status: true, message: "New Employee Created" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: err.errors[0].message });
  }
};

// SIGN IN DRIVER Handler
const httpSignInDriverHandler = async (req, res) => {
  try {
    const { emp_email, password } = req.body;
    console.log(req.body);
    const data = {
      emp_email,
      password,
    };
    if (email) {
      const employee = await Employees.findOne({
        where: {
          emp_email: req.body.emp_email,
        },
      });
      const token = jwt.sign(
        {
          id: user.id,
          emp_email: req.body.emp_email,
        },
        "process.env.TOKEN_KEY",
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      return res.status(200).json({ status: true, employee });
    } else {
      return res.status(400).json({ status: false, message: "missing data" });
    }
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

module.exports = {
  httpSignUpDriverHandler,
  httpSignInDriverHandler,
};
