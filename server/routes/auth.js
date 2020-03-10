const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Club = require("../models/subdocuments/Club")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)


      if (err) {
        reject(new Error('Something went wrong'))
      } else {
        resolve(user);
      }
    })
  })
}



router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {

    // Check for errors
    if (err) next(new Error('Something went wrong'));
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});

router.get("/signup", (req, res, next) => {
  res.json("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  if (username === "" || password === "") {
    res.json({
      message: "Indicate username and password"
    });
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.json({
        message: "The username already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      role
    });

    newUser.save()
      .then(() => {
        res.json(newUser);
      })
      .catch(err => {
        res.json({
          message: "Something went wrong"
        });
      })
  });
});



// router.get('/currentuser', (req, res, next) => {
//   if (req.user) {
//     res.status(200).json(req.user);
//     return;
//   } else {
//     res.status(403).json({
//       message: 'Unauthorized'
//     })
//   }
// })



//////login sign up CLUB///////////

// const loginclub = (req, club) => {
//   return new Promise((resolve, reject) => {
//     req.login(club, err => {
//       console.log('req.login ')
//       console.log(club)


//       if (err) {
//         reject(new Error('Something went wrong'))
//       } else {
//         resolve(club);
//       }
//     })
//   })
// }

// router.post('/clublogin', (req, res, next) => {
//   passport.authenticate('local', (err, theClub, failureDetails) => {

//     // Check for errors
//     if (err) next(new Error('Something went wrong'));
//     if (!theClub) next(failureDetails)

//     // Return user and logged in
//     loginclub(req, theClub).then(club => res.status(200).json(req.club));

//   })(req, res, next);
// });


router.get("/clubsignup", (req, res, next) => {
  res.json("auth/signup");
});

router.post("/clubsignup", (req, res, next) => {
  const clubname = req.body.clubname;
  const password = req.body.password;
  const role = req.body.role;

  if (clubname === "" || password === "") {
    res.json({
      message: "Indicate clubname and password"
    });
    return;
  }

  Club.findOne({
    clubname
  }, "clubname", (err, club) => {
    if (club !== null) {
      res.json({
        message: "The clubname already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newClub = new Club({
      clubname,
      password: hashPass,
      role
    });

    newClub.save()
      .then(() => {
        res.json(newClub);
      })
      .catch(err => {
        res.json({
          message: "Something went wrong"
        });
      })
  });
});

router.get('/currentclub', (req, res, next) => {
  if (req.club) {
    res.status(200).json(req.club);
    return;
  } else {
    res.status(403).json({
      message: 'Unauthorized'
    })
  }
})




router.get("/logout", (req, res) => {
  req.logout();
  res.json({
    message: 'Log out success!'
  });
});

module.exports = router;