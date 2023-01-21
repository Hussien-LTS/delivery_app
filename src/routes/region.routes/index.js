"use strict";

const {
  httpAddRegionHandler,
  httpGetRegionsHandler,
  httpGetOneRegionHandler,
  httpUpdateOneRegionHandler,
  httpDeleteOneRegionHandler,
} = require("../../controllers/region.controller");

const { validateAdmin } = require("../../middleware/validateAdmin");

const regionRouter = require("express").Router();

regionRouter.post("/", httpAddRegionHandler);
regionRouter.get("/", httpGetRegionsHandler);
regionRouter.get("/:id", httpGetOneRegionHandler);
regionRouter.put("/:id", httpUpdateOneRegionHandler);
regionRouter.delete("/:id", httpDeleteOneRegionHandler);

module.exports = { regionRouter };
