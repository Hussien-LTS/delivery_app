"use strict";

const Employees = require("../models/employees.model").employees;

// CHECK IF USER ALREADY EXIST IN DATABASE
const existingUser = async (req, res, next) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ status: false, message: "email req" });
    }
    const employee = await Employees.findOne({
      where: {
        email: req.body.email,
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
