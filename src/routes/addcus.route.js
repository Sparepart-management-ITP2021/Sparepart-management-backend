const express = require('express');
const router = express.Router();

const addcusController = require('../controllers/addcus.controller');

const addcusAPI = () => {
  router.post("/add-addcus", addcusController.addAddcus);
  router.get("/get-addcus", addcusController.getAddcus);
  router.delete("/delete-addcus/:id", addcusController.deleteAddcus);
  router.get("/get-addcus/:id", addcusController. getAddcusById);
  router.put("/update-addcus/:id", addcusController.updateAddcus);
  

  return router;
}

module.exports = addcusAPI ;