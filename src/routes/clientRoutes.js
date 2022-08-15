const express = require("express");
const Client = require("../controller/clientController");
const Router = express.Router();

Router.post("/", Client.addClient);
Router.get("/", Client.getClient);
Router.get("/identifyclients/:id", Client.identifyClient);

Router.delete("/:id", Client.deleteClient);
Router.patch("/:id", Client.updateClient);
module.exports = Router;
