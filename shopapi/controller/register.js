const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const config = require("../../confing");

const User = require("../model/users");

router.post("/", async (req, res) => {

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

     
      user = new User({
        name,
        email,
        password,
     
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        // config.JWT_SECRETE,
        "5f53f5b35a4f82003d3e8061",
        { expiresIn: "7d",},
        (error, token) => {
          if (error) throw error;
         res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;