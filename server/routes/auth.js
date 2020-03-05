const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Club = require("../models/Club")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});


router.get("/clublogin", (req, res, next) => {
  res.render("auth/clublogin", { "message": req.flash("error") });
});

router.post("/clublogin", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/clublogin",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/clubsignup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/clubsignup", (req, res, next) => {
  const clubname = req.body.clubname;
  const password = req.body.password;
  if (clubname === "" || password === "") {
    res.render("auth/clubsignup", { message: "Indicate clubname and password" });
    return;
  }

  Club.findOne({ clubname }, "clubname", (err, club) => {
    if (club !== null) {
      res.render("auth/clubsignup", { message: "The clubname already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newClub = new Club({
      clubname,
      password: hashPass
    });

    newClub.save()
    .then(() => {
      res.json(newClub);
    })
    .catch(err => {
      res.render("auth/clubsignup", { message: "Something went wrong" });
    })
  });
});

router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
