var express = require("express");

var router = express.Router();

// Import the model (exercise.js) to use its database functions.
var exercise = require("../models/exercise.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  exercise.all(function(data) {
    var hbsObject = {
      exercises: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/exercises", function(req, res) {
  exercise.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/exercises/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  exercise.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/exercises/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  exercise.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
