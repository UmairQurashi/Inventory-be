const mongoose = require("mongoose");
const DB = "mongodb://127.0.0.1:27017/InventorySystem";
const app = require("./app");
require("dotenv").config({ path: `${__dirname}/../.env` });

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB successfully connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("app is Listen at ", process.env.PORT);
});
