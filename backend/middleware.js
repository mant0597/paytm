// middleware.js
const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authToken = req.headers['x-auth-token'];

    if (!authToken) {
        return res.status(403).json({ message: "Authentication token missing" });
    }

    try {
        const decoded = jwt.verify(authToken, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        console.error('Error verifying token:', err);
        return res.status(403).json({ message: "Invalid token" });
    }
};

module.exports = {
    authMiddleware
};
