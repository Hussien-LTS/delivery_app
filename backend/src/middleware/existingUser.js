"use strict";

const employeesModel = require("../models").Employees;

// CHECK IF USER ALREADY EXIST IN DATABASE
const existingUser = async (req, res, next) => {
  try {
    if (!req.body.emp_email) {
      return res.status(400).json({ status: false, message: "email req" });
    }
    console.log(req.body.emp_email);
    const employee = await employeesModel.findOne({
      where: {
        emp_email: req.body.emp_email,
      },
    });
    if (employee) {
      return res.status(409).send("email already taken");
    }
    next();
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = { existingUser };
