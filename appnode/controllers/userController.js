const User = require('../models/users')

exports.index = function(req,res, next){
    User.find({}, (err,users)=>{
        if(err){
            return next(err)
        }else{
            res.send(users)
        }

    })
}

exports.create = function(req,res,next){
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        id: req.body.id,
        password: req.body.password,
        photo: req.body.photo,
        state: req.body.state,
    })

    user.save(err => {
        if(err){
            return next(err)
        }else{
            res.send("User guardado exitosamente")
        }
    })
}