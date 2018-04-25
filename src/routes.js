const routes = require("express").Router(); // eslint-disable-line new-cap

routes.get("/", (req, res, next) => {
    res.status(200);
    res.json({message: "Hello YNAP"});
    next();
});

module.exports = routes;
