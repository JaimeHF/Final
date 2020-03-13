const express = require("express");
const passport = require('passport');
const router = express.Router();
const Match = require("../models/Match");
const User = require ("../models/User")




router.get(`/`, (req, res,next)=>{
    Match.find().sort({date:1})
    .then(allMatch=> res.json(allMatch))
    .catch(err => console.log(err))
})


router.post(`/newmacth`, (req, res, next)=>{
    console.log("estoy en la ruta de back")
    console.log(req.body);
    Match.create(req.body)
    .then(newMatch => res.json(newMatch))
    .catch(err =>console.log(err))
})

router.get(`/:id`,(req, res, next)=>{
    let {id} = req.params
     Match.findById(id)
     .populate({
      path: 'userCreate_id',
      model: 'User'
  })
        .then((macth) => {
          res.json(macth)
        });

})


router.put(`/addmacth/:id`,(req,res,next)=>{
    Match.findByIdAndUpdate(req.params.id,{$push:{
      user_id: req.body.newUser,
    }},{
        new: true
      })
      .populate({
        path: 'id',
        model: 'User'
    })
      .then((editMatch) => {
        res.json(editMatch)
        // res.json(user)
      });
})
module.exports = router;