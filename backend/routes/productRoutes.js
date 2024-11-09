const express = require("express");
const {
  getProducts,
  updateProducts,
  getProduct,
  addProduct,
  deleteProducts,
} = require("../controllers/ProductControllers");

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProduct);

router.get("/:id", getProduct);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

module.exports = router;
