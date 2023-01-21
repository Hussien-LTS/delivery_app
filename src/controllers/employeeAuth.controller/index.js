"use strict";
const bcrypt = require("bcrypt");
const employeesModel = require("../../models").Employees;

// REGISTER USER Handler
const httpSignUpEmpHandler = async (req, res) => {
  try {
    const {
      emp_name,
      emp_email,
      emp_phone_number,
      classification_code,
      emp_role,
      emp_password,
    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const data = {
      emp_name,
      emp_email,
      emp_phone_number,
      classification_code,
      emp_role,
      emp_password: await bcrypt.hash(emp_password, salt),
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

// SIGN IN Handler
const httpSignInEmpHandler = async (req, res) => {
  try {
    const { emp_email, password } = req.body;
    console.log(req.body);
    const data = {
      emp_email,
      password,
    };
    if (email) {
      const employee = await employeesModel.findOne({
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
  httpSignUpEmpHandler,
  httpSignInEmpHandler
};
