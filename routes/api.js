const express = require("express");
const router = express.Router();
const Word = require("../models/word");

//get every country
router.get("/words", function (req, res) {
  Word.find({}).then(function (country) {
    res.send(word);
  });
});

// add a country to db -> working!!!!
router.post("/words", function (req, res) {
  //new instance of County object
  Word.create(req.body).then(function (word) {
    res.send(word);
  });
});

module.exports = router;
