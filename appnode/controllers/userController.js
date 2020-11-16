const User = require("../models/users");

exports.index = function (req, res, next) {
  User.find({}, (err, users) => {
    if (err) {
      return next(err);
    } else {
      res.send(users);
    }
  });
};

exports.create = function (req, res, next) {
  let user = new User({
    name: req.body.name,
    username: req.body.username,
    userid: req.body.userid,
    password: req.body.password,
    photo: req.body.photo,
    state: req.body.state,
  });

  user.save((err) => {
    if (err) {
      return next(err);
    } else {
      res.send("User guardado exitosamente");
    }
  });
};
exports.edit = function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.send("El user ha sido editado correctamente");
    }
  });
};

exports.delete = function (req, res, next) {
  console.log("hola");
  //req.params.id;
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return next(err);
    res.send("El user ha sido removido exitosamente");
  });
};
