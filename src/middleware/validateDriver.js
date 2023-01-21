const jwt = require("jsonwebtoken");
const driversModel = require("../models/drivers.model");

// CHECK IF USER IS A DRIVER
const validateDriver = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ status: false, message: "token not found" });
  }
  const decodedJwt = jwt.decode(token, { complete: true });
  if (!decodedJwt || !decodedJwt?.payload?.id) {
    return res
      .status(401)
      .json({ status: false, message: "Not a valid JWT token" });
  }
  const id = decodedJwt?.payload?.id;
  driversModel
    .findOne(req.body, {
      where: {
        id: id,
      },
    })
    .then((driver) => {
      if (driver) {
        req.driver = driver;
        next();
      } else {
        return res
          .status(404)
          .json({ status: false, message: "driver not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ status: false, message: err.message });
    });
};

module.exports = { validateDriver };
