const path = require("path");
const products = require("../models/products.model");

exports.getProduct = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const product = {
    name,
    price,
  };
  products.push(product);
  res.status(201).json({
    success: true,
    products,
  });
};
