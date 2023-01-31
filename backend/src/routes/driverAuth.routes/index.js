"use strict";

const {
  httpSignUpDriverHandler,
  httpSignInDriverHandler,
} = require("../../controllers/driverAuth.controller");

const { existingUser } = require("../../middleware/existingUser");
const { validateAdmin } = require("../../middleware/validateAdmin");

const DriverAuthRouter = require("express").Router();

DriverAuthRouter.post("/registerDriver", httpSignUpDriverHandler);

DriverAuthRouter.post("/signInDriver", httpSignInDriverHandler);

module.exports = { DriverAuthRouter };
