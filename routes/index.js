var express = require("express")
var router = express.Router();
var db = require("../models/book");

router.post("/api/savebook",function(req,res){
      db.create(req.body)
      .then(function(result){
          console.log("Book saved",result)
          res.json(result)
      })
});

router.get("/api/savebook",function(req,res){
    db.find({})
    .then(function(result){
        console.log("Book saved",result)
        res.json(result)
    })
});

module.exports = router;
