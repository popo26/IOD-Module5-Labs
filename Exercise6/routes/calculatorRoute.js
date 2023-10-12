const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/add", (req, res) => {
  calculatorController.Add(req, res);
});

router.get("/subtract", (req, res) => {
  calculatorController.Subtract(req, res);
});

router.get("/multiply", (req, res) => {
  calculatorController.Multiply(req, res);
});

router.get("/divide", (req, res) => {
  calculatorController.Divide(req, res);
});

module.exports = router;
