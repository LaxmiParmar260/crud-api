const express = require("express");
const connectDB = require("./config/modelConfig");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//Db connection
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Default route
app.get("/", (req, res) => res.send("Welcome To server"));

app.get("/product", (req, res) => {
  res.json([{ id: 1, name: "car", model: "safari" }]);
});

//Product Router
app.use("/api/product", require("./routes/productRoutes"));

app.listen(PORT, (req, res) => {
  console.log(`server is running on  port :  ${PORT}`);
});
