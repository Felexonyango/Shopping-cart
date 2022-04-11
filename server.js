const express = require("express");
const cors = require("cors");
const  connectDB =require("./db")
// const register = require("./routes/register");
// const login = require("./routes/login");

const products = require("./products");

const app = express();
connectDB()

require("dotenv").config();

app.use(express.json());
app.use(cors());

// app.use("/api/register", register);
// app.use("/api/login", login);

app.get("/", (req, res) => {
  res.send("Welcome our to shop...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;



app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

