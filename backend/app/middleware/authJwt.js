require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  //Extract the token from the header
  const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

  //If there is not token
  if (!token) return res.status(401).send({ message: "No token provided!" });

  //If there is a token, verify it
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ message: "Unauthorized. Your token is not longer valid" });
    }
    // req.userId = decoded.id;
    res.send({ message: "Token provided.Access allowed" });
    next();
  });
}

module.exports = { authenticateToken };
