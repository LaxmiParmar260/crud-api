const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  //DB Query for getting Products
  const products = await Product.find();
  if (!products) {
    res.status(404);
    res.json({
      error: "Products Not Found",
    });
  }
  res.status(200);
  res.json(products);
};

//DB Query for Getting product using ID
const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    res.json({
      error: "Product Not Found",
    });
  }
  res.status(200);
  res.json(product);
};

//Add product
const addProduct = async (req, res) => {
  const { name, category, price, qty, isAvailable } = req.body;
  if (!name || !category || !price || !isAvailable || !qty) {
    res.status(400);
    res.json({
      msg: "please fill All Detailes ",
    });
  }
  const newProduct = await Product.create({
    name,
    price,
    category,
    qty,
    isAvailable,
  });
  res.status(201).json(newProduct);
};

//update the product
const updateProducts = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(200).json(updatedProduct);
};

//delete product
const deleteProducts = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({
    msg: "Product Deleted",
  });
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProducts,
  deleteProducts,
};
