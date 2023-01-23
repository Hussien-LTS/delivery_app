"use strict";
require("dotenv").config();
const pg = require("pg");

const { Sequelize, DataTypes } = require("sequelize");

const conString = process.env.CONSTRING

pg.defaults.ssl = false;
const sequelize = new Sequelize(conString, {
  logging: false,
  dialect: "postgres",
  protocol: "postgres",
});
(async () => await sequelize.sync({ alter: true }))();
// alter=== force

const BuildingTypes = require("./buildingTypes.model")(sequelize, DataTypes);
const ClientLocations = require("./clientLocations.model")(
  sequelize,
  DataTypes
);
const ClientPoints = require("./clientPoints.model")(sequelize, DataTypes);
const Clients = require("./clients.model")(sequelize, DataTypes);
const Countries = require("./countries.model")(sequelize, DataTypes);
const Discounts = require("./discounts.model")(sequelize, DataTypes);
const Drivers = require("./drivers.model")(sequelize, DataTypes);
const EmployeeClassifications = require("./employeeClassifications.model")(
  sequelize,
  DataTypes
);
const Employees = require("./employees.model")(sequelize, DataTypes);
const FoodClassifications = require("./foodClassifications.model")(
  sequelize,
  DataTypes
);
const Orders = require("./orders.model")(sequelize, DataTypes);
const Permissions = require("./permissions.model")(sequelize, DataTypes);
const Plans = require("./plans.model")(sequelize, DataTypes);
const PlansFullDesc = require("./plansFullDesc.model")(sequelize, DataTypes);
const Products = require("./products.model")(sequelize, DataTypes);
const ProductsNutritional_info = require("./productsNutritional_info.model")(
  sequelize,
  DataTypes
);
const PromoCoupons = require("./promoCoupons.model")(sequelize, DataTypes);
const Rates = require("./rates.model")(sequelize, DataTypes);
const Regions = require("./regions.model")(sequelize, DataTypes);
const SalePoints = require("./salePoints.model")(sequelize, DataTypes);
const Subscriptions = require("./subscriptions.model")(sequelize, DataTypes);
const Trips = require("./trips.model")(sequelize, DataTypes);


// Countries
// Regions
// SalePoints
// Employees

// Countries.belongsTo(ClientLocations); // 1-1

Countries.hasMany(Regions);
Regions.belongsTo(Countries); 

Countries.belongsTo(SalePoints);
SalePoints.belongsTo(Countries); 

SalePoints.hasMany(Employees);
Employees.belongsTo(SalePoints); 


// // BuildingTypes 
// BuildingTypes.belongsTo(ClientLocations); // 1-1

// // ClientLocations
// ClientLocations.hasOne(BuildingTypes, { foreignKey: "building_types_Id" });
// ClientLocations.hasOne(Countries, { foreignKey: "country_Id" });
// ClientLocations.belongsTo(Clients); // 1-n

// // ClientPoints
// ClientPoints.belongsTo(Clients); // 1-n

// // Clients
// Clients.hasMany(ClientLocations, { foreignKey: "client_Id" });
// Clients.hasMany(ClientPoints, { foreignKey: "client_Id" });
// Clients.hasMany(Orders, { foreignKey: "order_Id" });
// Clients.hasMany(Rates, { foreignKey: "client_rate_Id" });

// //FIXME: 1-n or n-n ??
// // Clients.hasMany(PromoCoupons, { foreignKey: "promoCoupons_id" });


// // Discounts
// Discounts.hasMany(Products, { foreignKey: "discount_Id" });

// // Drivers
// Drivers.hasMany(Rates, { foreignKey: "driver_rate_Id" });
// Drivers.hasMany(Orders, { foreignKey: "driver_Id" });
// Drivers.belongsTo(SalePoints); // 1-n

// // EmployeeClassifications
// // EmployeeClassifications.hasMany(Permissions, { foreignKey: "permissions_Id" });

// // Employees

// // FoodClassifications

// // Orders
// Orders.belongsTo(Clients); //1-n
// Orders.hasOne(Drivers, { foreignKey: "driver_Id" });

// // Permissions

// // Products
// Products.belongsTo(Discounts); //1-n

// // ProductsNutritional_info

// // PromoCoupons
// //FIXME: 1-n or n-n ??
// // PromoCoupons.belongsTo(Clients, { foreignKey: "promoCoupons_id" });

// // Rates
// Rates.belongsTo(Clients); //1-n
// Rates.belongsTo(Drivers); //1-n

// // Regions

// // SalePoints
// SalePoints.hasMany(Drivers, { foreignKey: "driver_Id" });

// Trips

module.exports = {
  BuildingTypes,
  ClientLocations,
  ClientPoints,
  Clients,
  Countries,
  Discounts,
  Drivers,
  EmployeeClassifications,
  Employees,
  FoodClassifications,
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
