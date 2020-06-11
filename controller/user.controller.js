const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Profiles = require('../models/profile.model')

exports.login = (req, res) => {
    Profiles.findOne({ username : req.body.username})
    .then(user => {
        if(user.length < 1){
            return res.status(401).json({
                message: "Login failed. No user found"
            })
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(err){
                return res.status(401).json({
                    message: "Login failed. Invalid password"
                })
            }
            if(result){
               const token = jwt.sign({
                    id: user._id,
                    username: user.username
                }, 
                process.env.SECRET_KEY,
                {
                    expiresIn:  "1h"
                }
            )
                return res.status(200).json({
                    message: "Login successfully",
                    token : token
                })
            }
            res.status(401).json({
                message: "Login failed"
            })
        })
    })
    .catch(err => res.status(500).json({
        error:  + err,
        "message": "Catch Error"
        }))
}