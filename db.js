const mongoose = require("mongoose");
const config = require("./confing")
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ecommerce:ecommerce@cluster0.cpp1h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });

    console.log("MongoDB Connected....");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;