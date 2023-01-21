"use strict";

const {
  httpAddTripToOneSalePointHandler,
  httpGetAllTripsForOneSalePointHandler,
  // httpGetOneTripForOneSalePointHandler,
  // httpUpdateTripForOneSalePointHandler,
  // httpDeleteTripForOneSalePointHandler,
} = require("../../controllers/trip.controller");

const { validateAdmin } = require("../../middleware/validateAdmin");

const tripRouter = require("express").Router();

tripRouter.post("/sale-point/:salePoint_id", validateAdmin, httpAddTripToOneSalePointHandler);
tripRouter.get("/sale-point/:salePoint_id", httpGetAllTripsForOneSalePointHandler);
// tripRouter.get("/:trip_id/sale-point/:salePoint_id", httpGetOneTripForOneSalePointHandler);
// tripRouter.put("/:trip_id/sale-point/:salePoint_id", validateAdmin, httpUpdateTripForOneSalePointHandler);
// tripRouter.delete("/:trip_id/sale-point/:salePoint_id", validateAdmin, httpDeleteTripForOneSalePointHandler);

module.exports = { tripRouter };
