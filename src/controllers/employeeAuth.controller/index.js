"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const employeesModel = require("../../models").Employees;

// REGISTER USER Handler
const httpSignUpEmpHandler = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.emp_password, salt);
    req.body.emp_password = hashedPassword;
    const newEmp = await employeesModel.create(req.body);

    if (newEmp) {
      return res.status(201).json({ status: true, message: newEmp });
    }
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// SIGN IN Handler
const httpSignInEmpHandler = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(401)
      .json({ status: false, message: "please enter email and password" });
  }
  try {
    await employeesModel
      .findOne({
        where: {
          emp_email: req.body.email,
        },
      })
      .then(async function (record) {
        const token = jwt.sign(
          {
            id: record.id,
            email: req.body.email,
          },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        await record.update({ emp_token: token });
        if (!record) {
          return res
            .status(404)
            .json({ status: false, message: "no emp found" });
        }
        const validPassword = await bcrypt.compare(
          req.body.password,
          record.emp_password
        );
        if (!validPassword) {
          return res
            .status(401)
            .json({ status: false, message: "Invalid Email or Password" });
        }
        return res.status(200).json({ status: true, record });
      });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

module.exports = {
  httpSignUpEmpHandler,
  httpSignInEmpHandler,
};
