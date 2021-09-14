const express = require('express');
const router = express.Router();

const addcusController = require('../controllers/addcus.controller');

const addcusAPI = () => {
  router.post("/add-addcus", addcusController.addAddcus);
  router.get("/get-addcus", addcusController.getAddcus);
  router.delete("/delete-addcus/:id", addcusController.deleteAddcus);

  return router;
}

module.exports = addcusAPI ;