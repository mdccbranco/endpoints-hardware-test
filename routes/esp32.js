// routes/sensor-routes.js
const express = require("express");
const router = express.Router();

const Sensor = require("../models/data");
const Json = require("../models/json");

// POST route => to create a new sensor
router.post("/sensors", (req, res, next) => {
  Sensor.create({
    rawData: req.body,
  })
    .then(response => {
      Json.findById("5eb30d7cbbf06d12a5c77d25")
      .then(data => {
        res.json(data.json);
      })
      .catch(err => {
        res.json(err);
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get all the sensors
router.get("/sensors", (req, res, next) => {
  Sensor.find()
    .then(allThesensors => {
      res.json(allThesensors);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific sensor/detailed view
// router.get("/sensors/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Sensor.findById(req.params.id)
//     .then(response => {
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// // DELETE route => to delete a specific sensor
// router.delete("/sensors/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Sensor.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({
//         message: `sensor with ${req.params.id} is removed successfully.`
//       });
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;
