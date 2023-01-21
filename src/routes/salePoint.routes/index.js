"use strict";

const {
  httpAddSalePointHandler,
  httpGetAllSalePointHandler,
  httpGetOneSalePointHandler,
  httpUpdateSalePointHandler,
  httpDeleteSalePointHandler,
} = require("../../controllers/salePoint.controller");

const { validateAdmin } = require("../../middleware/validateAdmin");

const salePointRouter = require("express").Router();

salePointRouter.post("/", httpAddSalePointHandler);
salePointRouter.get("/", httpGetAllSalePointHandler);
salePointRouter.get("/:id", httpGetOneSalePointHandler);
salePointRouter.put("/:id", httpUpdateSalePointHandler);
salePointRouter.delete("/:id", httpDeleteSalePointHandler);

module.exports = { salePointRouter };
