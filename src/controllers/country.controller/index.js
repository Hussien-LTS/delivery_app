"use strict";
const CountryModel = require("../../models").Countries;

// ADD NEW COUNTRY
const httpAddCountryHandler = async (req, res) => {
  try {
    const newCountry = await CountryModel.create(req.body);
    return res.status(201).json({ status: true, message: newCountry });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

// GET ALL COUNTRIES
const httpGetCountriesHandler = async (req, res) => {
  try {
    const countries = await CountryModel.findByPk(1, {
      include: [Regions],
    });
    return res.status(200).json({ status: true, message: countries });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

// GET ONE COUNTRIES
const httpGetOneCountryHandler = async (req, res) => {
  try {
    const country = await CountryModel.findByPk(req.params.id);
    return res.status(200).json({ status: true, message: country });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// UPDATE ONE COUNTRIES
const httpUpdateOneCountryHandler = async (req, res) => {
  try {
    const updatedCountry = await CountryModel.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    });
    return res.status(200).json({ status: true, message: updatedCountry });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// DELETE  ONE COUNTRIES
const httpDeleteOneCountryHandler = async (req, res) => {
  try {
    const country = await CountryModel.findByPk(req.params.id);
    if (!country) {
      return res
        .status(404)
        .json({ status: true, message: "country not found " });
    }
    await country.destroy();
    return res.status(200).json({ status: true, message: "country Deleted " });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

module.exports = {
  httpAddCountryHandler,
  httpGetCountriesHandler,
  httpGetOneCountryHandler,
  httpUpdateOneCountryHandler,
  httpDeleteOneCountryHandler,
};
