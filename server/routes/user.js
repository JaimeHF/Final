const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get(`/`, (req, res,next)=>{
   User.find()
    .then(allUser=> res.json(allUser))
    .catch(err => console.log(err))
})

router.put(`/edit/:id`,(req,res,next)=>{
    let {id} = req.params
    User.findByIdAndUpdate(id,{
        username: req.body.username,
    },{
        new: true
      })
      .then((editUser) => {
        res.json(editUser)
      });
})


router.get(`/:id`,(req, res, next)=>{
    let {id} = req.params
     User.findById(id)
        .then((user) => {
          res.json(user)
        });

})

module.exports = router;