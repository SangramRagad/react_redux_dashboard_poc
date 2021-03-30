const User = require("../models/User");
var jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
// var expressJwt = require("express-jwt");
const config = require("config");

exports.signUp = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }
  console.log("hit from frontenddd");
  //Create user and Check for duplicate users
  // User.findOne({ email }).then(async result => {
  //   console.log("result", result);
  //   if (result) {
  //     return res.status(400).json({
  //       error: "USER is already exist !!",
  //     });
  //   } else {
  //     const user = await User.create({
  //       name,
  //       email,
  //       password,
  //     });
  //     res.send(user);
  //   }
  // });

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB",
      });
    }
    res.json({
      FirstName: user.firstName,
      LastName: user.lastName,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signIn = (req, res, next) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  //Create user and Check for duplicate users

  // User.findOne({ email }, (err, user) => {
  //   if (err || !user) {
  //     return res.status(400).json({
  //       error: "USER email and password is incorrect !!",
  //     });
  //   } else if (user.password != password) {
  //     return res.status(400).json({
  //       error: "password is incorrect !!",
  //     });
  //   } else {
  //     res.status(200).json({
  //       msg: "login successfuly..",
  //       user: user,
  //     });
  //   }
  // });

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email and password is incorrect !!",
      });
    } else if (user.password != password) {
      return res.status(400).json({
        error: "password is incorrect !!",
      });
    }

    // if (!user.authenticate(password)) {
    //   return res.status(401).json({
    //     error: "Email and password do not match",
    //   });
    // }

    //create token
    const token = jwt.sign({ _id: user._id }, config.get("jwtSecret"));
    //put token in cookie
    res.cookie("token", token, {
      expire:
        Date.now() + config.get("JWT_COOKIE_EXPIRE") * 24 * 60 * 60 * 1000,
    });

    //send response to front end
    const { _id, firstName, email } = user;
    return res.json({ token: token, user: { _id, firstName, email } });
  });
};
