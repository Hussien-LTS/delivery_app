"use strict";

const {
  httpGetEmpProfileHandler,
  httpUpdateEmpProfileHandler,
} = require("../../controllers/employee.controller");

const { validateEmployee } = require("../../middleware/validateEmployee");

const employeeRouter = require("express").Router();

employeeRouter.get("/:id",  httpGetEmpProfileHandler);

employeeRouter.put("/:id",  httpUpdateEmpProfileHandler);

module.exports = { employeeRouter };
