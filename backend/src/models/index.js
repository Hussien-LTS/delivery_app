"use strict";
require("dotenv").config();
const pg = require("pg");

const { Sequelize, DataTypes } = require("sequelize");

const conString = process.env.CONSTRING;

pg.defaults.ssl = false;
const sequelize = new Sequelize(conString, {
  logging: false,
  dialect: "postgres",
  protocol: "postgres",
});
(async () => await sequelize.sync({ force: true }))();
// alter=== force

const BuildingTypes = require("./buildingTypes.model")(sequelize, DataTypes);
const ClientLocations = require("./clientLocations.model")(
  sequelize,
  DataTypes
);
const ClientPoints = require("./clientPoints.model")(sequelize, DataTypes);
const Clients = require("./clients.model")(sequelize, DataTypes);
const Countries = require("./countries.model")(sequelize, DataTypes);
// const Discounts = require("./discounts.model")(sequelize, DataTypes);
const Drivers = require("./drivers.model")(sequelize, DataTypes);
const EmpClassifications = require("./empClassifications.model")(
  sequelize,
  DataTypes
);
const Employees = require("./employees.model")(sequelize, DataTypes);

const Orders = require("./orders.model")(sequelize, DataTypes);
const Permissions = require("./permissions.model")(sequelize, DataTypes);
// const Plans = require("./plans.model")(sequelize, DataTypes);
// const PlansFullDesc = require("./plansFullDesc.model")(sequelize, DataTypes);
const Products = require("./products.model")(sequelize, DataTypes);
const ProductsNutritional_info = require("./productsNutritional_info.model")(
  sequelize,
  DataTypes
);
const PromoCoupons = require("./promoCoupons.model")(sequelize, DataTypes);
const Rates = require("./rates.model")(sequelize, DataTypes);
const Regions = require("./regions.model")(sequelize, DataTypes);
const SalePoints = require("./salePoints.model")(sequelize, DataTypes);
// const Subscriptions = require("./subscriptions.model")(sequelize, DataTypes);
const Trips = require("./trips.model")(sequelize, DataTypes);
const SalePoints_Products = require("./salePoints_Products.model")(
  sequelize,
  DataTypes
);

const SalePoints_Drivers = require("./salePoints_Drivers.model")(
  sequelize,
  DataTypes
);

Countries.hasOne(Regions, { foreignKey: "countryId" });
Regions.belongsTo(Countries);

// Countries.belongsTo(SalePoints);
// SalePoints.belongsTo(Countries);

BuildingTypes.hasOne(ClientLocations, {
  foreignKey: "building_types_Id",
});

Clients.hasMany(ClientLocations, { foreignKey: "clientId" });
ClientLocations.belongsTo(Clients);

SalePoints.hasMany(Employees, { foreignKey: "salePointId" });
Employees.belongsTo(SalePoints);

EmpClassifications.hasMany(Employees, { foreignKey: "empId" });
Employees.belongsTo(EmpClassifications);

SalePoints.hasMany(Employees, { foreignKey: "salePointId" });
Employees.belongsTo(SalePoints);

SalePoints.hasMany(Employees, { foreignKey: "salePointId" });
Employees.belongsTo(SalePoints);

SalePoints.belongsToMany(Products, { through: SalePoints_Products });
Products.belongsToMany(SalePoints, { through: SalePoints_Products });

SalePoints.belongsToMany(Drivers, { through: SalePoints_Drivers });
Drivers.belongsToMany(SalePoints, { through: SalePoints_Drivers });

SalePoints.hasMany(Orders, { foreignKey: "salePointId" });
Orders.belongsTo(SalePoints);

Orders.hasMany(Products, { foreignKey: "orderId" });
Products.belongsTo(Orders);

Drivers.hasMany(Orders, { foreignKey: "driverId" });
Orders.belongsTo(Drivers);

Clients.hasMany(Orders, { foreignKey: "clientId" });
Orders.belongsTo(Clients);

Countries.hasOne(ClientLocations, {
  foreignKey: "countryId",
});

Clients.hasMany(ClientPoints, { foreignKey: "clientId" });
ClientPoints.belongsTo(Clients);

Drivers.hasMany(Rates, { foreignKey: "driverId" });
Rates.belongsTo(Drivers);

Orders.hasOne(Rates, { foreignKey: "orderId" });
Drivers.hasOne(Rates, { foreignKey: "driverId" });

module.exports = {
  BuildingTypes,
  ClientLocations,
  ClientPoints,
  Clients,
  Countries,
  Drivers,
  EmpClassifications,
  Employees,
  Orders,
  Permissions,
  Products,
  ProductsNutritional_info,
  PromoCoupons,
  Rates,
  Regions,
  SalePoints,
  Trips,
};
