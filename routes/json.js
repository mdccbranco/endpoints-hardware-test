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
        res.render('input-json', {sucess:true});
      })
      .catch(err => {
        res.render('input-json', {sucess:false});
      });
  });
  
  router.get("/json", (req, res, next) => {
    console.log('Aqui')
    res.render('input-json')
  });
  
module.exports = router;
