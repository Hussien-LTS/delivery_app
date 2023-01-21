"use strict";

const {
  httpSignUpEmpHandler,
  httpSignInEmpHandler,
} = require("../../controllers/employeeAuth.controller");

const { existingUser } = require("../../middleware/existingUser");
const { validateAdmin } = require("../../middleware/validateAdmin");

const employeeAuthRouter = require("express").Router();

employeeAuthRouter.post("/registerEmp", httpSignUpEmpHandler);

employeeAuthRouter.post("/signInEmp", httpSignInEmpHandler);

module.exports = { employeeAuthRouter };
