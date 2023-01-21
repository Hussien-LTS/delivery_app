require("dotenv").config();
const app = require("./src/app");
const db = require("./src/models");

const PORT = process.env.PORT || 3030;

// db.sequelize
//   .sync({ force: true })
//   .then(() => {
//     //db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//       console.log(`Listening on port ${PORT}...`);
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });


  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
