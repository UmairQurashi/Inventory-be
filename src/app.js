const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const ProductTyperoutes = require("./routes/mainProductroutes");
const pointAnditemRoutes = require("./routes/pointAnditem");
const clientRoutes = require("./routes/clientRoutes");
const purchaseOrderRoutes = require("./routes/purchaseOrderRoutes");

const cors = require("cors");
app.use(express.json());

app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/clients", clientRoutes);
app.use("/api/v1/mainproducts", ProductTyperoutes);
app.use("/api/v1/points", pointAnditemRoutes);
app.use("/api/v1/itemnames", pointAnditemRoutes);
app.use("/api/v1/purchaseorder", purchaseOrderRoutes);

module.exports = app;
