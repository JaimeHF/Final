const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Club = require("../models/Club");
const Post = require("../models/Post");
const Match = require("../models/Match");




router.get(`/`, (req, res,next)=>{
    Match.find()
    .then(allMatch=> res.json(allMatch))
    .catch(err => console.log(err))
})


router.post(`/newmacth`, (req, res, next)=>{
    Match.create(req.body)
    .then(newMatch => res.json(newMatch))
    .catch(err =>console.log(err))
})

router.get(`/:id`,(req, res, next)=>{
    let {id} = req.params
     Match.findById(id)
        .then((macth) => {
          res.json(macth)
        });

})

router.put(`/editmacth/:id`,(req,res,next)=>{
    let {id} = req.params
    Match.findByIdAndUpdate(id,{
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
    },{
        new: true
      })
      .then((editMatch) => {
        res.json(editMatch)
        // res.json(user)
      });
})
module.exports = router;