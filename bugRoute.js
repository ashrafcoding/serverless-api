const express = require('express');
const router = express.Router();
const bugModel = require('./bugModel')

router.get('/', function(req, res, next) {
    bugModel.getAllBugs().then(bugs=>{
      res.send(bugs)
  })  });
  
  router.post('/', function(req, res, next) {
    bugModel.getAllBugs().then(bugs=>{
      res.send(bugs)
  })  });
  
  router.put('/', function(req, res, next) {
    bugModel.getAllbugs().then(bugs=>{
      res.send(bugs)
  })  });
  
  router.delete('/', function(req, res, next) {
    bugModel.getAllbugs().then(bugs=>{
      res.send(bugs)
  })  });
  
  
  module.exports = router;