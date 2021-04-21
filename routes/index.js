const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Tencent CloudBase + Express" });
});
router.get("/hello", function(req, res, next) {
    res.send({ "name": 'yyy', "age": 22 })
});
module.exports = router;