const express = require("express");
const router = express.Router();

const Req = require("../models/req");

router.get("/log", (req, res, next) => {
  Req.find().then((data) => {
    res.send(data);
  });
});

module.exports = router;
