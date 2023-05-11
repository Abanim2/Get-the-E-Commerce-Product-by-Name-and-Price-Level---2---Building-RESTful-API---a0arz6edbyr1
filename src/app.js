// const fs = require("fs");
// const express = require("express");
// const app = express();

// // Importing products from products.json file
// const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// //Middlewares
// app.use(express.json());

// // GET endpoint for sending the products to client by id
// //// Endpoint - /api/v1/products/:id

// module.exports = app;



const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

//Middlewares
app.use(express.json());

// GET endpoint for sending the products to client by id
//// Endpoint - /api/v1/products/:id
app.get("/api/v1/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    data: { product },
  });
});

module.exports = app;
