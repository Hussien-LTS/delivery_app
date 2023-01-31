"use strict";

const tripsModel = require("../../models").Trips;
const salePointsModel = require("../../models").SalePoints;

// ADD NEW TRIP TO A SALE POINT
const httpAddTripToOneSalePointHandler = async (req, res) => {
  try {
    const newTrip = await tripsModel.create(res.body);
    if (newTrip) {
      await salePointsModel.update(
        { trips_id: newTrip.id },
        {
          where: {
            id: req.params.salePoint_id,
          },
        }
      );
      return res.status(201).json({ status: true, message: newTrip });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: error.errors[0].message });
  }
};
//TODO: SHOW ONLY THE TRIPS
// GET ALL TRIPS FOR ONE SALE POINT
const httpGetAllTripsForOneSalePointHandler = async (req, res) => {
  try {
    const salePoints = await tripsModel.findOne(
      {
        where: {
          id: req.params.salePoint_id,
        },
      },
      { attributes: ["id", "trip_id"] },
      {
        include: [
          {
            model: Trip,
          },
        ],
      }
    );
    if (salePoints) {
      return res.status(200).json({ status: true, message: salePoints });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: error.errors[0].message });
  }
};

// GET ONE SALE POINT
const httpGetOneSalePointHandler = async (req, res) => {
  try {
    const salePoint = await tripsModel.findOne( {
      where: {
        id: req.params.salePoint_id,
      },
    },
    { attributes: ["id", "trip_id"] },
    {
      include: [
        {
          model: Trip,
          where: {
            id: req.params.trip,
          },
        },
      ],
    });
    if (salePoint) {
      return res.status(200).json({ status: true, message: salePoint });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: error.errors[0].message });
  }
};

// UPDATE ONE SALE POINT
const httpUpdateSalePointHandler = async (req, res) => {
  try {
    const salePoint = await tripsModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (salePoint) {
      return res.status(200).json({ status: true, message: salePoint });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: error.errors[0].message });
  }
};

// DELETE ONE SALE POINT IF IT DOSE NOT HAVE DATA
const httpDeleteSalePointHandler = async (req, res) => {
  try {
    const salePoint = await tripsModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (salePoint.length < 0) {
      return res
        .status(403)
        .json({ status: false, message: "the sale point is not empty" });
    }
    await tripsModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res
      .status(200)
      .json({ status: true, message: "the sale point deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: error.errors[0].message });
  }
};

module.exports = {
  httpAddTripToOneSalePointHandler,
  httpGetAllTripsForOneSalePointHandler,
  // httpGetOneTripForOneSalePointHandler,
  // httpUpdateTripForOneSalePointHandler,
  // httpDeleteTripForOneSalePointHandler,
};
