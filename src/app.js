"use strict";
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const { employeeAuthRouter } = require("./routes/employeeAuth.routes");
const { employeeRouter } = require("./routes/employee.routes");
const { salePointRouter } = require("./routes/salePoint.routes");
const { countryRouter } = require("./routes/country.routes");
const { regionRouter } = require("./routes/region.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", employeeAuthRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/salePoint", salePointRouter);
app.use("/api/country", countryRouter)
app.use("/api/region", regionRouter)

module.exports = app;