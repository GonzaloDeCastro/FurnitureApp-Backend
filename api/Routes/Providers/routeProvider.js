const express = require("express");
const router = express.Router();
const controllerProviders = require("../../Controllers/controllerProviders");

module.exports = () => {
  router.get("/all", controllerProviders.getAllProviders);
  router.get("/:providerId", controllerProviders.searchById);
  router.get("/name/:providerName", controllerProviders.searchByName);
  router.get("/email/:providerEmail", controllerProviders.searchByEmail);
  router.put("/:providerId", controllerProviders.updateProvider);
  router.post("/", controllerProviders.addProvider);
  router.delete("/:providerId", controllerProviders.deleteProvider);

  return router;
};
