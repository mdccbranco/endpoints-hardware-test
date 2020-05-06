const express = require("express");
const router = express.Router();

const Json = require("../models/json");


router.post("/json", (req, res, next) => {
    const {json} = req.body;
    // Json.create({
    //   json,
    // })
    Json.findByIdAndUpdate('5eb30d7cbbf06d12a5c77d25',{
        json
    })
      .then(response => {
        res.redirect('/json');
      })
      .catch(err => {
        res.redirect('/json');  
    });
  });
  
  router.get("/json", (req, res, next) => {
    Json.findById("5eb30d7cbbf06d12a5c77d25")
    .then(data => {
      res.render('input-json', {json:data.json})
    })
  });
  
module.exports = router;
