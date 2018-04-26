const routes = require("express").Router(); // eslint-disable-line new-cap
const toRoman = require("./lib/toRoman");
const toArabic = require("./lib/toArabic");

routes
    .post("/get-numeric", (req, res, next) => {
        let {value} = req.body;
        if (!value || value < 1) {
            res.status(400);
            res.json({
                error: "Please provide a Roman Literal",
            });
            return next(new Error("Missing Parameters"));
        }
        const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

        if (romanRegex.test(value)) {
            const result = toArabic(value);
            res.status(200);
            res.json({
                returnValue: result,
            });
        } else {
            res.status(400);
            res.json({
                error: "Please review the input's validity",
            });
            return next(new Error("Roman Literal Regex failed"));
        }

        next();
    })
    .post("/get-roman", (req, res, next) => {
        let {value} = req.body;
        if (!value || value < 1) {
            res.status(400);
            res.json({
                error: "Please provide a positive numeric value",
            });
            return next(new Error("Missing Parameters"));
        }

        const result = toRoman(value);

        res.status(200);
        res.json({
            returnValue: result,
        });

        next();
    });

module.exports = routes;
