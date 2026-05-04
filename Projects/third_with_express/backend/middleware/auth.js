
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  try {
    // 1. Get token from header
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send("No token provided");
    }

    // 2. Remove "Bearer "
    const actualToken = token.split(" ")[1];

    // 3. Verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // 4. Store user data in request
    req.user = decoded;

    // 5. Go to next step
    next();

  } catch (error) {
    res.status(401).send("Invalid or expired token");
  }

};

module.exports = authMiddleware;