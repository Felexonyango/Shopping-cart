const jwt  = require("jsonwebtoken");
// const config = require("./../confing");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, "5f53f5b35a4f82003d3e8061",);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
