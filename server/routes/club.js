const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Club = require("../models/Club");
const Post = require("../models/Post");
const Match = require("../models/Match");




router.get(`/`, (req, res,next)=>{
    Club.find()
    .then(allClub=> res.json(allClub))
    .catch(err => console.log(err))
})


router.get(`/:id`,(req, res, next)=>{
    let {id} = req.params
     Club.findById(id)
        .then((club) => {
          res.json(club)
        });
})

router.post(`/editclub/:id`,(req,res,next)=>{
    let {id} = req.params
    Club.findByIdAndUpdate(id,{
        clubname: req.body.clubname,
        description: req.body.description,
    },{
        new: true
      })
      .then((editClub) => {
        res.json(editClub)
        // res.json(user)
      });
})
module.exports = router;