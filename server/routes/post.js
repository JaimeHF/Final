const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Club = require("../models/Club")
const Post = require("../models/Post")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get(`/`, (req, res,next)=>{
    Post.find()
    .then(allPost=> res.json(allPost))
    .catch(err => console.log(err))
})


router.post(`/newpost`, (req, res, next)=>{
    Post.create(req.body)
    .then(newPost => res.json(newPost))
    .catch(err =>console.log(err))
})

router.get(`/:id`,(req, res, next)=>{
    let {id} = req.params
     Post.findById(id)
        .then((post) => {
          res.json(post)
        });

})

router.post(`/editpost/:id`,(req,res,next)=>{
    let {id} = req.params
    Post.findByIdAndUpdate(id,{
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
    },{
        new: true
      })
      .then((editPost) => {
        res.json(editPost)
        // res.json(user)
      });
})
module.exports = router;