"use strict";

const {
  httpAddCountryHandler,
  httpGetCountriesHandler,
  httpGetOneCountryHandler,
  httpUpdateOneCountryHandler,
  httpDeleteOneCountryHandler,
} = require("../../controllers/country.controller");

const { validateAdmin } = require("../../middleware/validateAdmin");

const countryRouter = require("express").Router();

countryRouter.post("/", httpAddCountryHandler);
countryRouter.get("/", httpGetCountriesHandler);
countryRouter.get("/:id", httpGetOneCountryHandler);
countryRouter.put("/:id", httpUpdateOneCountryHandler);
countryRouter.delete("/:id", httpDeleteOneCountryHandler);
module.exports = { countryRouter };
