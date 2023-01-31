"use strict";
const RegionModel = require("../../models").Regions;

// ADD NEW Region
const httpAddRegionHandler = async (req, res) => {
  try {
    const newRegion = await RegionModel.create(req.body);
    return res.status(201).json({ status: true, message: newRegion });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// GET ALL RegionS
const httpGetRegionsHandler = async (req, res) => {
  try {
    const regions = await RegionModel.findAll({
      include: [{ all: true }],
    });
    return res.status(200).json({ status: true, message: regions });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// GET ONE Region
const httpGetOneRegionHandler = async (req, res) => {
  try {
    const region = await RegionModel.findByPk(req.params.id, {
      include: [{ all: true }],
    });
    return res.status(200).json({ status: true, message: region });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// UPDATE ONE RegionS
const httpUpdateOneRegionHandler = async (req, res) => {
  try {
    const updatedRegion = await RegionModel.update(
      req.body,
      { returning: true, where: { id: req.params.id } },
      {
        include: [{ all: true }],
      }
    );
    return res.status(200).json({ status: true, message: updatedRegion });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

// DELETE  ONE RegionS
const httpDeleteOneRegionHandler = async (req, res) => {
  try {
    const region = await RegionModel.findByPk(req.params.id);
    if (!region) {
      return res
        .status(404)
        .json({ status: true, message: "region not found " });
    }
    await region.destroy();
    return res.status(200).json({ status: true, message: "region Deleted " });
  } catch (err) {
    return res.status(500).json({ status: false, message: err });
  }
};

module.exports = {
  httpAddRegionHandler,
  httpGetRegionsHandler,
  httpGetOneRegionHandler,
  httpUpdateOneRegionHandler,
  httpDeleteOneRegionHandler,
};
