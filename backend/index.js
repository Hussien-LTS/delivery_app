require("dotenv").config();
const app = require("./src/app");
const db = require("./src/models");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
