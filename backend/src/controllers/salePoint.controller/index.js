"use strict";

const salePointsModel = require("../../models").SalePoints;

// ADD NEW SALE POINT
const httpAddSalePointHandler = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "missing body" });
    }
    const newSalePoint = await salePointsModel.create(req.body);
    console.log(newSalePoint);
    if (newSalePoint) {
      return res.status(201).json(newSalePoint);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// GET ALL SALE POINT
const httpGetAllSalePointHandler = async (req, res) => {
  try {
    const salePoints = await salePointsModel.findAll();
    if (!salePoints) {
      return res.status(400).json({ message: "no sale Points found" });
    }
    return res.status(200).json({ salePoints });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// GET ONE SALE POINT
const httpGetOneSalePointHandler = async (req, res) => {
  try {
    const salePoint = await salePointsModel.findOne(
      {
        include: [{ all: true }],
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!salePoint) {
      return res.status(400).json({ message: "no sale Point found" });
    }
    return res.status(200).json({ salePoint });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// UPDATE ONE SALE POINT
const httpUpdateSalePointHandler = async (req, res) => {
  try {
    const salePoint = await salePointsModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (salePoint) {
      return res.status(200).json({ salePoint });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// DELETE ONE SALE POINT IF IT DOSE NOT HAVE DATA
const httpDeleteSalePointHandler = async (req, res) => {
  try {
    const salePoint = await salePointsModel.findOne({
      include: [{ all: true }],
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
    if (salePoint.employees) {
      return res.status(403).json({ message: "the sale point is not empty" });
    }
    await salePointsModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ message: "the sale point deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  httpAddSalePointHandler,
  httpGetAllSalePointHandler,
  httpGetOneSalePointHandler,
  httpUpdateSalePointHandler,
  httpDeleteSalePointHandler,
};
