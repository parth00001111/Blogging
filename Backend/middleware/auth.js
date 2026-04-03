const jwt = require('jsonwebtoken');
const { SECRET_Key } = require('../config');

const middleware = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    try {
        const decoded = jwt.verify(token, SECRET_Key);
        req.userDetail = decoded;
        next();
    } catch (e) {
        res.status(401).send("Invalid token");
    }
};

module.exports = { middleware };